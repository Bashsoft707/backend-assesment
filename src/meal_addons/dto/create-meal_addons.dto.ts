import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMealAddonsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  category: string;
}
