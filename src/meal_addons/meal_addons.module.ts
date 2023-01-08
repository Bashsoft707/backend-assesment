import { Module } from '@nestjs/common';
import { MealAddonsService } from './meal_addons.service';
import { MealAddonsController } from './meal_addons.controller';

@Module({
  controllers: [MealAddonsController],
  providers: [MealAddonsService],
})
export class MealAddonsModule {}
