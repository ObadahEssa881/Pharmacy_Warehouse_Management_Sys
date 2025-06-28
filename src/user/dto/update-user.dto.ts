export class UpdateUserDto {
  username?: string;
  email?: string;
  role?: 'PHARMACY_OWNER' | 'PHARMACIST';
  pharmacy_id?: number;
}
