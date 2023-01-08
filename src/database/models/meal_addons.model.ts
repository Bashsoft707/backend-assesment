import { Model } from 'objection';
import { BaseModel } from './base.model';
import { MealAddonCategories } from './meal_addon-categories.model';

export class MealAddons extends BaseModel {
  static get tableName() {
    return 'meal_addons';
  }

  name: string;
  description: string;
  price: number;
  category: string;

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: MealAddonCategories,
        join: {
          from: 'meal_addons.meal_addon_category_id',
          to: 'meal_addon_categories.id',
        },
      },
    };
  }
}
