import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
  imports: [AuthModule],
})
export class InvoiceModule {}
