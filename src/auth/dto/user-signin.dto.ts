import { IsEmail, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '@prisma/client';

export class SignUpDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  propertyName: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  contact_number: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  pharmacy_id?: number;

  @IsOptional()
  fcm_token: string;
}

export class SignInDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  fcm_token: string;
}
