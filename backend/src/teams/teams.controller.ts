import { Controller, Get, Param } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './teams.model';
import { CURRENT_SEASON } from 'config/configs';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get()
    getAllTeams(): Promise<Team[]> {
        return this.teamsService.getAllTeams();
    }

    @Get(':id')
    getTeam(@Param('id') id): Promise<Team> {
        return this.teamsService.getTeam(id);
    }

    @Get('season/stats/:season')
    getSeasonStats(@Param('season') season): Promise<any> {
        season = season == 'current' ? CURRENT_SEASON : season;
        return this.teamsService.getSeasonStats(season);
    }
}
