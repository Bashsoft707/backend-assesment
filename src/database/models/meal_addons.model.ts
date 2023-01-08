import { Model } from 'objection';
import { BaseModel } from './base.model';
import { MealAddonCategoriesModel } from './meal_addon-categories.model';

export class MealAddonsModel extends BaseModel {
  static get tableName() {
    return 'meal_addons';
  }

  name: string;
  description: string;
  price: number;
  category: string;
}
