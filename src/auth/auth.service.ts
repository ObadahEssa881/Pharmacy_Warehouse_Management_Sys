import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

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
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'p2002') {
          throw new ForbiddenException('Credential Taken');
        }
      }
    }
    return { msg: 'success' };
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
    return this.signToken(user.id, user.email);
  }
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { id: userId, email };
    const secret = this.config.get<string>('JWT_SECRET');

    // ✅ Await the promise here
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: secret,
    });

    return { access_token: token };
  }
}
