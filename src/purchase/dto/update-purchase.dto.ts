// src/purchase/dto/update-status.dto.ts
import { IsEnum } from 'class-validator';
import { PurchaseStatus } from '../../common/enums/purchase‑status.enum';

export class UpdatePurchaseStatusDto {
  @IsEnum(PurchaseStatus) status: PurchaseStatus;
}
