import { BaseModel } from './base.model';

export class MealAddonsModel extends BaseModel {
  static get tableName() {
    return 'meal_addons';
  }

  name: string;
  description: string;
  price: number;
  category: string;
}
