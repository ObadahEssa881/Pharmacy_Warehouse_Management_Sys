import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { PurchaseModule } from 'src/purchase/purchase.module';

@Module({
  imports: [
    PurchaseModule, // This is the critical fix - import the module that provides PurchaseService
  ],
  controllers: [WarehouseController],
  providers: [WarehouseService],
})
export class WarehouseModule {}
