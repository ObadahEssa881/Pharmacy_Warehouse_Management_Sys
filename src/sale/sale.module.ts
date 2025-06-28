import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  controllers: [SaleController],
  providers: [SaleService],
  imports: [AuthModule],
})
export class SaleModule {}
