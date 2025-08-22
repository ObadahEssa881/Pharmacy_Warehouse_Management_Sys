import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationsService } from './notification.service';
import { NotificationsController } from './notification.controller';
import { PrismaService } from '../prisma/prisma.service';
import { FirebaseAdminService } from './firebase-admin.service';

@Module({
  imports: [ScheduleModule],
  providers: [NotificationsService, PrismaService, FirebaseAdminService],
  controllers: [NotificationsController],
  exports: [NotificationsService],
})
export class NotificationsModule {}
