import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './teams.model';

@Controller('teams')
export class TeamsController {
    constructor(private teamsService: TeamsService) {}

    @Get()
    getAllTeams(): Team[] {
        return this.teamsService.getAllTeams();
    }
}
