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
      // Create pharmacy first (to get ID)
      const pharmacy = await this.prisma.pharmacy.create({
        data: {
          name: `${dto.propertyName}'s Pharmacy`,
          address: dto.address || 'N/A',
          contact_number: dto.contact_number || 'N/A',
        },
      });

      // Then create the user with pharmacy_id
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          email: dto.email,
          password_hash: hash,
          role: dto.role,
          pharmacy_id: pharmacy.id,
        },
      });

      // Update pharmacy to set owner_id after user is created
      await this.prisma.pharmacy.update({
        where: { id: pharmacy.id },
        data: { owner_id: user.id },
      });

      return 'created';
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    if (!(await argon.verify(user.password_hash, dto.password))) {
      throw new ForbiddenException('Credentials incorrect');
    }

    await this.prisma.pharmacy.findUnique({
      where: { id: user.pharmacy_id },
    });

    return this.signToken(
      user.id,
      user.email,
      user.role,
      'user',
      user.pharmacy_id,
      null,
    );
  }

  async signupSupplier(dto: SupplierSignUpDto) {
    const hash = await argon.hash(dto.password);
    try {
      // Create warehouse first
      const warehouse = await this.prisma.warehouse.create({
        data: {
          name: `${dto.propertyName}'s Warehouse`,
          address: dto.warehouseAddress || 'N/A',
          contact_number: dto.contact_number || 'N/A',
        },
      });

      // Then create supplier with warehouseId
      const supplier = await this.prisma.supplier.create({
        data: {
          name: dto.name,
          email: dto.email,
          password_hash: hash,
          role: dto.role,
          contact_person: dto.contact_person,
          phone: dto.phone,
          address: dto.address,
          warehouseId: warehouse.id,
        },
      });

      // Update warehouse to set owner_id
      await this.prisma.warehouse.update({
        where: { id: warehouse.id },
        data: { owner_id: supplier.id },
      });

      return 'created';
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

    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: supplier.warehouseId },
    });

    return this.signToken(
      supplier.id,
      supplier.email,
      supplier.role,
      'supplier',
      null,
      warehouse?.id ?? null,
    );
  }

  async signToken(
    id: number,
    email: string,
    role: string,
    accountType: 'user' | 'supplier',
    pharmacy_id: number | null = null,
    warehouse_id: number | null = null,
  ): Promise<{ access_token: string }> {
    const payload = {
      id,
      email,
      role,
      type: accountType,
      pharmacy_id,
      warehouse_id,
      // ...(pharmacy_id && { pharmacy_id }),
      // ...(warehouse_id && { warehouse_id }),
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: this.config.get('JWT_SECRET'),
    });

    return { access_token: token };
  }
}
