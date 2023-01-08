import { Module } from '@nestjs/common';
import { MealAddonCategoriesService } from './meal_addon-categories.service';
import { MealAddonCategoriesController } from './meal_addon-categories.controller';

@Module({
  controllers: [MealAddonCategoriesController],
  providers: [MealAddonCategoriesService]
})
export class MealAddonCategoriesModule {}
