import { BaseModel } from './base.model';
import { MealAddonsModel } from './meal_addons.model';

export class MealAddonCategoriesModel extends BaseModel {
  static get tableName() {
    return 'meal_addon_categories';
  }

  name: string;
}
