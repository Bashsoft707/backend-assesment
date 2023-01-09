import { Knex } from 'knex';
import { MealAddonCategoriesModel } from '../models/meal_addon-categories.model';

export async function seed(knex: Knex) {
  await MealAddonCategoriesModel.query(knex).insert([
    {
      name: 'Local',
    },
    {
      name: 'International',
    },
    {
      name: 'Drinks',
    },
  ]);
}
