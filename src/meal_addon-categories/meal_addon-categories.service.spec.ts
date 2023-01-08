import { Test, TestingModule } from '@nestjs/testing';
import { MealAddonCategoriesService } from './meal_addon-categories.service';

describe('MealAddonCategoriesService', () => {
  let service: MealAddonCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealAddonCategoriesService],
    }).compile();

    service = module.get<MealAddonCategoriesService>(MealAddonCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
