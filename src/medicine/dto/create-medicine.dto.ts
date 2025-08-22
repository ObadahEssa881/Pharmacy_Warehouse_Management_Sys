// create-medicine.dto.ts
import { IsInt, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMedicineDto {
  @IsString()
  name: string;

  @IsString()
  titer: string;

  @IsInt()
  category_id: number;

  @IsInt()
  company_id: number;

  @IsNumber()
  unit_price: number;

  @IsInt()
  supplier_id: number;

  @IsOptional()
  @IsString()
  Type?: string;
}
