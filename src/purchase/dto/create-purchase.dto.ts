import { IsInt, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class PurchaseItemDto {
  @IsInt()
  medicine_id: number;

  @IsInt()
  quantity: number;

  @IsNumber()
  unit_price: number;
}

export class CreatePurchaseDto {
  @IsInt()
  supplier_id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PurchaseItemDto)
  items: PurchaseItemDto[];
}
