import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { CsvModule } from 'nest-csv-parser';
import { Teams } from './teams/teams.entity';

@Module({
  imports: [
    TeamsModule,
    TypeOrmModule.forRoot(typeormConfig),
    CsvModule
  ]
})
export class AppModule {}
