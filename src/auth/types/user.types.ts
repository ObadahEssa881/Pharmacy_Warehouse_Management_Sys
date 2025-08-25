export interface UserJwtPayload {
  id: number;
  email: string;
  pharmacy_id: number;
  warehouse_id: number;
  role: string;
  iat?: number;
  exp?: number;
}
