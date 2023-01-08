import { BaseModel } from './base.model';
import { MealAddons } from './meal_addons.model';

export class MealAddonCategories extends BaseModel {
  static get tableName() {
    return 'meal_addon_categories';
  }

  name: string;

  static get relationMappings() {
    return {
      mealAddons: {
        relation: BaseModel.HasManyRelation,
        modelClass: MealAddons,
        join: {
          from: 'meal_addon_categories.id',
          to: 'meal_addons.meal_addon_category_id',
        },
      },
    };
  }
}
