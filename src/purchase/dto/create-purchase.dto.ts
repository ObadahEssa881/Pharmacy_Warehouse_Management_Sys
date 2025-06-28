// src/purchase/dto/create-purchase.dto.ts
import { IsInt, IsPositive, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class PurchaseItemInput {
  @IsInt() medicine_id: number;
  @IsInt() @IsPositive() quantity: number;
  unit_price: string; // decimal
}

export class CreatePurchaseDto {
  @IsInt() supplier_id: number;

  @ValidateNested({ each: true })
  @Type(() => PurchaseItemInput)
  @IsArray()
  items: PurchaseItemInput[];
}
