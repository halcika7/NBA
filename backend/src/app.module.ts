import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { CsvModule } from 'nest-csv-parser';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    TeamsModule,
    TypeOrmModule.forRoot(typeormConfig),
    CsvModule,
    PlayersModule,
    GamesModule
  ]
})
export class AppModule {}
