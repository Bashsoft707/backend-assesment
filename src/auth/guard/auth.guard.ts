import {
  CanActivate,
  ExecutionContext,
  Inject,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ModelClass } from 'objection';
import { UserModel } from 'src/database/models/user.model';
import { retrieveTokenValue } from 'src/auth/utils/jwt.utils';

export class AuthGuard implements CanActivate {
  constructor(@Inject('UserModel') private modelClass: ModelClass<UserModel>) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    request.user = await this.authorizeUser(context);
    return true;
  }

  async authorizeUser(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split('Bearer')[1].trim();
    }

    if (!token) {
      throw new UnauthorizedException();
    }

    const { id } = await retrieveTokenValue<{ id: string }>(token);

    const user = await this.modelClass.query().findById(id);

    if (!user) {
      throw new NotFoundException();
    }

    if (user.role !== 'admin') {
      throw new UnauthorizedException();
    }

    return user;
  }
}
