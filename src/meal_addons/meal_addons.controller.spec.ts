import { Test, TestingModule } from '@nestjs/testing';
import { MealAddonsController } from './meal_addons.controller';
import { MealAddonsService } from './meal_addons.service';

describe('MealAddonsController', () => {
  let controller: MealAddonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealAddonsController],
      providers: [MealAddonsService],
    }).compile();

    controller = module.get<MealAddonsController>(MealAddonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
