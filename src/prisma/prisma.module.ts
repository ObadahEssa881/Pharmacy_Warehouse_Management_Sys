import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    PrismaService,
    // Optional: If you still want to expose PrismaClient as a separate provider
    {
      provide: 'PRISMA_CLIENT',
      useFactory: (prismaService: PrismaService) => {
        return prismaService;
      },
      inject: [PrismaService],
    },
  ],
  exports: [PrismaService, 'PRISMA_CLIENT'],
})
export class PrismaModule {}
