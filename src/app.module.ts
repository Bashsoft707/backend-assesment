import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { MealAddonsModule } from './meal_addons/meal_addons.module';
import { MealAddonCategoriesModule } from './meal_addon-categories/meal_addon-categories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    MealAddonsModule,
    MealAddonCategoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
