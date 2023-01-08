import { IsNotEmpty, IsString } from "class-validator";

export class CreateMealAddonCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
