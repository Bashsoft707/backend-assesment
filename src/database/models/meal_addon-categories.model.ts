import { Model } from 'objection';
import { BaseModel } from './base.model';
import { MealAddonsModel } from './meal_addons.model';

export class MealAddonCategoriesModel extends BaseModel {
  static get tableName() {
    return 'meal_addon-categories';
  }

  name: string;

  static relationMappings = {
    'meal_addon-categories': {
      relation: Model.HasManyRelation,
      modelClass: MealAddonsModel,
      join: {
        from: 'meal_addon-categories.name',
        to: 'meal_addons.category',
      },
    },
  };
}
