import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMealAddonCategoryDto } from './dto/create-meal_addon-category.dto';
import { MealAddonCategoriesModel } from 'src/database/models/meal_addon-categories.model';
import { ModelClass } from 'objection';
import { Inject } from '@nestjs/common/decorators';

@Injectable()
export class MealAddonCategoriesService {
  constructor(
    @Inject('MealAddonCategoriesModel')
    private modelClass: ModelClass<MealAddonCategoriesModel>,
  ) {}

  async create(createMealAddonCategoryDto: CreateMealAddonCategoryDto) {    
    try {
      const category = await this.modelClass
        .query()
        .insert(createMealAddonCategoryDto)
        .returning('*');

      return category;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error,
      });
    }
  }

  findAll() {
    return this.modelClass.query();
  }

  findOne(name: string) {
    return this.modelClass.query().where('name', name).first();
  }
}
