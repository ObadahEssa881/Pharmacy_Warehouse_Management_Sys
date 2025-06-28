import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [AuthModule],
})
export class InventoryModule {}
