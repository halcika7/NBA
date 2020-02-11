import { Injectable } from '@nestjs/common';
import { Team } from './teams.model';

@Injectable()
export class TeamsService {
    private teams: Team[] = [];

    getAllTeams(): Team[] {
        return this.teams;
    }
}
