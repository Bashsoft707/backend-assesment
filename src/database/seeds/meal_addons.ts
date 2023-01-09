import { Knex } from 'knex';
import { MealAddonsModel } from '../models/meal_addons.model';

export async function seed(knex: Knex) {
  await MealAddonsModel.query(knex).insert([
    {
      name: 'Jollof Rice',
      description: 'With Turkey and Plantain',
      price: 2000,
      category: 'Local',
    },
    {
      name: 'Rice',
      description: 'With Turkey, Plantain and Stew',
      price: 2000,
      category: 'Local',
    },
    {
      name: 'Pizza',
      price: 3000,
    },
  ]);
}
