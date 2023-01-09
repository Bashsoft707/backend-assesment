import { Module } from '@nestjs/common';
import { MealAddonsService } from './meal_addons.service';
import { MealAddonsController } from './meal_addons.controller';
import { MealAddonCategoriesService } from 'src/meal_addon-categories/meal_addon-categories.service';

@Module({
  controllers: [MealAddonsController],
  providers: [MealAddonsService, MealAddonCategoriesService],
})
export class MealAddonsModule {}
