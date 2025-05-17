import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private prisma: PrismaService,
  ) {
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>('JWT_SECRET', 'fallback-secret'), // Ensure it's defined
    };

    super(options);
  }

  async validate(payload: { id: number; email: string }) {
    const user = (await this.prisma.user.findUnique({
      where: {
        id: payload.id,
      },
    })) as { password_hash: string };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password_hash, ...User } = user;

    return User;
  }
}
