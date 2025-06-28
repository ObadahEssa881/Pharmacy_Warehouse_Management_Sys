import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(
    config: ConfigService,
    @Inject('PRISMA_CLIENT') private readonly prisma: any,
  ) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
