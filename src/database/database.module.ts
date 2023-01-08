import { Global, Module } from '@nestjs/common';
import Knex from 'knex';
import { Model } from 'objection';
import { MealAddonCategories } from './models/meal_addon-categories.model';
import { MealAddons } from './models/meal_addons.model';
import { UserModel } from './models/user.model';

const models = [UserModel, MealAddons, MealAddonCategories];

const modelProviders = models.map((model) => ({
  provide: model.name,
  useValue: model,
}));

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex({
        client: 'pg',
        connection: {
          host: process.env.DATABASE_HOST || 'localhost',
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
        },
      });
      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
