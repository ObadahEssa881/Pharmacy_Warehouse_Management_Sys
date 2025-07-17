// src/sale/dto/create-sale.dto.ts
import {
  IsInt,
  IsPositive,
  IsArray,
  ValidateNested,
  IsOptional,
  IsString,
  IsDecimal,
} from 'class-validator';
import { Type } from 'class-transformer';

class SaleItemInput {
  @IsInt() medicine_id: number;
  @IsInt() @IsPositive() quantity: number;
  @IsString()
  unit_price: string;

  @IsDecimal()
  cost_price: number;
}

export class CreateSaleDto {
  @IsOptional() customer_name?: string;

  @ValidateNested({ each: true })
  @Type(() => SaleItemInput)
  @IsArray()
  items: SaleItemInput[];

  @IsString()
  payment_mode: string;
}
