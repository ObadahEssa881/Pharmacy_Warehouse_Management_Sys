import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { AuthModule } from 'src/auth/auth.module';
import { NotificationsModule } from 'src/notification/notification.module';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [AuthModule, NotificationsModule],
})
export class InventoryModule {}
