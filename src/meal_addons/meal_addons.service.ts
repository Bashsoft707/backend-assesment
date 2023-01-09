import { HttpException, HttpStatus } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ModelClass } from 'objection';
import { MealAddonsModel } from 'src/database/models/meal_addons.model';
import { CreateMealAddonsDto } from './dto/create-meal_addons.dto';
import { UpdateMealAddonsDto } from './dto/update-meal_addons.dto';
import { MealAddonCategoriesModel } from 'src/database/models/meal_addon-categories.model';
import { MealAddonCategoriesService } from 'src/meal_addon-categories/meal_addon-categories.service';

export class MealAddonsService {
  constructor(
    @Inject('MealAddonsModel') private modelClass: ModelClass<MealAddonsModel>,
    private categoryService: MealAddonCategoriesService,
  ) {}

  async create(createMealAddonsDto: CreateMealAddonsDto) {
    const { category } = createMealAddonsDto;
    let categoryExists;

    if (category) {
      categoryExists = await this.categoryService.findOne(category);
    }

    if (category && !categoryExists) {
      throw new Error('Category does not exists');
    }

    try {
      const mealAddons = await this.modelClass
        .query()
        .insert(createMealAddonsDto)
        .returning('*');

      return mealAddons;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: err,
      });
    }
  }

  findAll() {
    return this.modelClass.query();
  }

  async findById(id: number) {
    const mealAddon = await this.modelClass.query().findById(id);

    if (!mealAddon) {
      throw new HttpException('Meal Addons not found', HttpStatus.NOT_FOUND);
    }

    return mealAddon;
  }

  async update(id: number, updateMealAddonsDto: UpdateMealAddonsDto) {
    const mealAddon = await this.findById(id);

    if (!mealAddon) {
      throw new HttpException('Meal Addons not found', HttpStatus.NOT_FOUND);
    }

    return this.modelClass
      .query()
      .patch(updateMealAddonsDto)
      .where('id', id)
      .returning('*')
      .first();
  }

  async remove(id: number) {
    const mealAddon = await this.findById(id);

    if (!mealAddon) {
      throw new HttpException('Meal Addons not found', HttpStatus.NOT_FOUND);
    }

    return this.modelClass
      .query()
      .delete()
      .where('id', id)
      .returning('*')
      .first();
  }
}
