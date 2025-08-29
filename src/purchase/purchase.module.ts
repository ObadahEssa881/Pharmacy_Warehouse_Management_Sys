import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { AuthModule } from 'src/auth/auth.module';
import { NotificationsModule } from '../notification/notification.module';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
  imports: [AuthModule , NotificationsModule],
  exports: [PurchaseService], // This must be present
})
export class PurchaseModule {}
