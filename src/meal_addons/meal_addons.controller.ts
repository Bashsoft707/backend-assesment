import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealAddonsService } from './meal_addons.service';
import { CreateMealAddonsDto } from './dto/create-meal_addons.dto';
import { UpdateMealAddonsDto } from './dto/update-meal_addons.dto';

@Controller('brands/:brandId/addons')
export class MealAddonsController {
  constructor(private readonly mealAddonsService: MealAddonsService) {}

  @Post()
  create(@Body() createMealAddonsDto: CreateMealAddonsDto) {
    return this.mealAddonsService.create(createMealAddonsDto);
  }

  @Get()
  findAll() {
    return this.mealAddonsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.mealAddonsService.findById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMealAddonsDto: UpdateMealAddonsDto,
  ) {
    return this.mealAddonsService.update(+id, updateMealAddonsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealAddonsService.remove(+id);
  }
}
