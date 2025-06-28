import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserJwtPayload } from '../../auth/types/user.types';

export const GetUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): UserJwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserJwtPayload;
  },
);
