import { BaseModel } from './base.model';

export class MealAddonCategoriesModel extends BaseModel {
  static get tableName() {
    return 'meal_addon-categories';
  }

  name: string;
}
