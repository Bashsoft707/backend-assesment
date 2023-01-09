import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { MealAddonCategoriesService } from './meal_addon-categories.service';
import { CreateMealAddonCategoryDto } from './dto/create-meal_addon-category.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('brands/:brandId/addon-categories')
export class MealAddonCategoriesController {
  constructor(
    private readonly mealAddonCategoriesService: MealAddonCategoriesService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createMealAddonCategoryDto: CreateMealAddonCategoryDto) {
    return this.mealAddonCategoriesService.create(createMealAddonCategoryDto);
  }

  @Get()
  find() {
    return this.mealAddonCategoriesService.findAll();
  }
}
