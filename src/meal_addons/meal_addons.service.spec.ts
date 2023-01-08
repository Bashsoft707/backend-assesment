import { Test, TestingModule } from '@nestjs/testing';
import { MealAddonsService } from './meal_addons.service';

describe('MealAddonService', () => {
  let service: MealAddonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealAddonsService],
    }).compile();

    service = module.get<MealAddonsService>(MealAddonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
