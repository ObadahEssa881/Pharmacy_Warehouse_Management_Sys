import {
  IsInt,
  IsEnum,
  IsPositive,
  IsDateString,
  IsNumber,
} from 'class-validator';
import { LocationType } from '@prisma/client';

export class CreateInventoryDto {
  @IsInt()
  medicine_id: number;

  @IsEnum(LocationType)
  location_type: LocationType;

  @IsPositive()
  quantity: number;

  @IsNumber()
  cost_price: number;

  @IsNumber()
  selling_price: number;

  @IsDateString()
  expiry_date: string;
}
