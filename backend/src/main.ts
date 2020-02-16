import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

class Entity {
  'Team ID': string;
  'Team Name': string;
  'Short Name': string;
  'Years': number;
  'Total Games': number;
  'Total Wins': number;
  'Total Losses': number;
  'Win Loss Percentage': number;
  'Champions': number;
  'Other Names': string[];
  'Link': string;
  'Active': boolean;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
