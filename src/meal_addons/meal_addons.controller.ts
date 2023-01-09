import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { MealAddonsService } from './meal_addons.service';
import { CreateMealAddonsDto } from './dto/create-meal_addons.dto';
import { UpdateMealAddonsDto } from './dto/update-meal_addons.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@UseGuards(AuthGuard)
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

  @Get(':addonsId')
  async findById(@Param('addonsId', new ParseIntPipe()) addonsId: string) {
    const mealAdon = await this.mealAddonsService.findById(+addonsId);
    // await mealAdon.$loadRelated('[category]');
    return mealAdon;
  }

  @Patch(':addonsId')
  update(
    @Param('addonsId') addonsId: string,
    @Body() updateMealAddonsDto: UpdateMealAddonsDto,
  ) {
    return this.mealAddonsService.update(+addonsId, updateMealAddonsDto);
  }

  @Delete(':addonsId')
  remove(@Param('addonsId') addonsId: string) {
    return this.mealAddonsService.remove(+addonsId);
  }
}
