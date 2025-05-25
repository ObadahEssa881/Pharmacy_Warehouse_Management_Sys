// src/types/express.d.ts

import { UserJwtPayload } from '../auth/types/user.type';

declare global {
  namespace Express {
    interface Request {
      user?: UserJwtPayload;
    }
  }
}
