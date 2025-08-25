import { IsEmail, IsNotEmpty, IsEnum, IsString } from 'class-validator';
import { SupplierRole } from '@prisma/client';

export class SupplierSignUpDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(SupplierRole)
  role: SupplierRole;

  @IsString()
  @IsNotEmpty()
  phone: string;

  contact_person?: string;

  @IsNotEmpty()
  address: string;
}

export class SupplierSignInDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
