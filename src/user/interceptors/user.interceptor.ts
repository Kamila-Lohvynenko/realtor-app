/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';

export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const request = context.switchToHttp().getRequest();

    const token: string = request?.headers?.authorization?.split('Bearer ')[1];

    const user = jwt.decode(token);

    request.user = user;

    return next.handle();
  }
}
