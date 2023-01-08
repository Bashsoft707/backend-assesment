import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  static get tableName() {
    return 'users';
  }

  name: string;
  email: string;
  password: string;

  static get relationMappings() {
    return {
      children: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: 'user.id',
          to: 'user.parentId',
        },
      },
    };
  }
}
