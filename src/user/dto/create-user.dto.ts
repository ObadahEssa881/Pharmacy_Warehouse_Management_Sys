export class CreateUserDto {
  username: string;
  email: string;
  password_hash: string; // You must hash this in React or the controller
  role: 'PHARMACY_OWNER' | 'PHARMACIST';
  pharmacy_id?: number;
}
