import { PartialType } from '@nestjs/mapped-types';
import { CreateMealAddonsDto } from './create-meal_addons.dto';

export class UpdateMealAddonsDto extends PartialType(CreateMealAddonsDto) {}
