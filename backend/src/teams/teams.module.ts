import { TeamsRepository } from './teams.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';


@Module({
  imports:[
    TypeOrmModule.forFeature([TeamsRepository])
  ],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}
