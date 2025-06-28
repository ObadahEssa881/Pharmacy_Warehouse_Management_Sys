// src/sale/dto/create-sale.dto.ts
import {
  IsInt,
  IsPositive,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class SaleItemInput {
  @IsInt() medicine_id: number;
  @IsInt() @IsPositive() quantity: number;
  unit_price: string;
}

export class CreateSaleDto {
  @IsOptional() customer_name?: string;

  @ValidateNested({ each: true })
  @Type(() => SaleItemInput)
  @IsArray()
  items: SaleItemInput[];

  payment_mode: string;
}
