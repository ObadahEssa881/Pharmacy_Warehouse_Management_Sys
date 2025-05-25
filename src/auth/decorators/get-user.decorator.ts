// src/auth/decorators/user.decorator.ts

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserJwtPayload } from '../types';
interface RequestWithUser extends Express.Request {
  user: UserJwtPayload;
}
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserJwtPayload => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
