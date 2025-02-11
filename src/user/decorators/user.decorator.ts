/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface UserInfo {
  name: string;
  id: number;
  lat: number;
  exp: number;
}

export const User = createParamDecorator((data, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();

  return request.user;
});
