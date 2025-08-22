import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [MedicineController],
  providers: [MedicineService],
  imports: [AuthModule],
})
export class MedicineModule {}
