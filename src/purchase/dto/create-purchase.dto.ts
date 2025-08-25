// create-purchase-order.dto.ts

import { Type } from 'class-transformer';
import { IsArray, IsDate, IsNumber, ValidateNested } from 'class-validator';

export class CreatePurchaseOrderDto {
  @IsNumber()
  supplier_id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PurchaseOrderItemDto)
  items: PurchaseOrderItemDto[];

  @Type(() => Date)
  @IsDate()
  deliveryDate: Date;
}

export class PurchaseOrderItemDto {
  @IsNumber()
  medicine_id: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  unit_price: number;
}
