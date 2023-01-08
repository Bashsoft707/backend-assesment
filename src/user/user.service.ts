import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from 'src/database/models/user.model';
import { ModelClass } from 'objection';

@Injectable()
export class UserService {
  constructor(@Inject('UserModel') private modelClass: ModelClass<UserModel>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.modelClass
        .query()
        .insert(createUserDto)
        .returning('*');
        
      return user;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: err,
      });
    }
  }

  findAll() {
    return this.modelClass.query();
  }

  findOne(id: number) {
    return this.modelClass.query().findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
