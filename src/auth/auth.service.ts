import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ModelClass } from 'objection';
import { UserModel } from 'src/database/models/user.model';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { signToken } from 'src/auth/utils/jwt.utils';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(@Inject('UserModel') private modelClass: ModelClass<UserModel>) {}

  async signup(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    try {
      const users = await this.modelClass.query().where('email', email);

      if (users.length > 0) {
        throw new Error('Email already exists');
      }

      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(password, salt, 32)) as Buffer;

      const hashedPassword = salt + '.' + hash.toString('hex');

      const user = await this.modelClass
        .query()
        .insert({ name, email, password: hashedPassword })
        .returning('*');

      const token = signToken(String(user.id));

      return { user, token };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: err,
      });
    }
  }

  async signin(body: { email: string; password: string }) {
    try {
      const user = await this.modelClass
        .query()
        .where('email', body.email)
        .first();

      if (!user) {
        throw new Error('User not found');
      }

      const [salt, storedHash] = user.password.split('.');
      const hash = (await scrypt(body.password, salt, 32)) as Buffer;

      if (storedHash !== hash.toString('hex')) {
        throw new BadRequestException('Invalid password');
      }

      const token = signToken(String(user.id));

      return { user, token };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error,
      });
    }
  }

  findAll() {
    return this.modelClass.query();
  }

  async findOne(id: number) {
    return this.modelClass.query().findOne({ id });
  }
}
