import { Module } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CoachesController } from './coaches.controller';

@Module({
  providers: [CoachesService],
  controllers: [CoachesController]
})
export class CoachesModule {}
