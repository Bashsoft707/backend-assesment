import { Test, TestingModule } from '@nestjs/testing';
import { MealAddonCategoriesController } from './meal_addon-categories.controller';
import { MealAddonCategoriesService } from './meal_addon-categories.service';

describe('MealAddonCategoriesController', () => {
  let controller: MealAddonCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealAddonCategoriesController],
      providers: [MealAddonCategoriesService],
    }).compile();

    controller = module.get<MealAddonCategoriesController>(MealAddonCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
