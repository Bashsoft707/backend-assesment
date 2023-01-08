import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealAddonCategoriesService } from './meal_addon-categories.service';
import { CreateMealAddonCategoryDto } from './dto/create-meal_addon-category.dto';

@Controller('brands/:brandId/addon-categories')
export class MealAddonCategoriesController {
  constructor(
    private readonly mealAddonCategoriesService: MealAddonCategoriesService,
  ) {}

  @Post()
  create(@Body() createMealAddonCategoryDto: CreateMealAddonCategoryDto) {
    return this.mealAddonCategoriesService.create(createMealAddonCategoryDto);
  }
}
