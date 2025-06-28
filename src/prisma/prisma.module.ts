import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { enhance } from '@zenstackhq/runtime';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: 'PRISMA_CLIENT',
      useFactory: () => {
        const prisma = new PrismaClient();
        const enhancedPrisma = enhance(prisma); // ✅ use enhance, NOT middleware
        return enhancedPrisma;
      },
    },
  ],
  exports: [PrismaService, 'PRISMA_CLIENT'],
})
export class PrismaModule {}
