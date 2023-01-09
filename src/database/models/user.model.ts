import { BaseModel } from './base.model';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export class UserModel extends BaseModel {
  static get tableName() {
    return 'users';
  }

  name: string;
  email: string;
  password: string;
  role: string;

  // static get relationMappings() {
  //   return {
  //     children: {
  //       relation: BaseModel.ManyToManyRelation,
  //       modelClass: UserModel,
  //       join: {
  //         from: 'user.id',
  //         to: 'user.parentId',
  //       },
  //     },
  //   };
  // }
}
