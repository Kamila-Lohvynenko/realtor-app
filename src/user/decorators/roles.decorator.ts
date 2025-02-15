import { SetMetadata } from '@nestjs/common';
import { UserType } from '@prisma/client';
export const ROLES = 'roles';
export const Roles = (...roles: UserType[]) => SetMetadata('roles', roles);
