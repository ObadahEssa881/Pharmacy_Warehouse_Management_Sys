import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  SupplierSignInDto,
  SupplierSignUpDto,
} from './dto/supplier-signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: SignUpDto) {
    const hash = await argon.hash(dto.password);

    try {
      await this.prisma.user.create({
        data: {
          username: dto.username,
          email: dto.email,
          password_hash: hash,
          role: dto.role,
          pharmacy_id: dto.pharmacy_id,
        },
      });
    } catch (error) {
      console.error(error instanceof PrismaClientKnownRequestError);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          console.log(1);
          throw new ForbiddenException('Credential Taken');
        }
      }
    }
  }

  async signin(dto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credintials incorrect');
    }
    if (!(await argon.verify(user.password_hash, dto.password))) {
      throw new ForbiddenException('Credintials incorrect');
    }
    return this.signToken(user.id, user.email, user.role, 'user');
  }

  async signupSupplier(dto: SupplierSignUpDto) {
    const hash = await argon.hash(dto.password);
    try {
      await this.prisma.supplier.create({
        data: {
          name: dto.name,
          email: dto.email,
          password_hash: hash,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          role: dto.role,
          contact_person: dto.contact_person,
          phone: dto.phone,
          address: dto.address,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException('Credential Taken');
      }
      throw error;
    }
  }

  async signinSupplier(dto: SupplierSignInDto) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { email: dto.email },
    });

    if (
      !supplier ||
      !(await argon.verify(supplier.password_hash, dto.password))
    ) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return this.signToken(
      supplier.id,
      supplier.email,
      supplier.role,
      'supplier',
    );
  }

  // auth.service.ts
  async signToken(
    id: number,
    email: string,
    role: string,
    accountType: 'user' | 'supplier',
  ): Promise<{ access_token: string }> {
    const payload = { id, email, role, type: accountType };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: this.config.get('JWT_SECRET'),
    });

    return { access_token: token };
  }
}
