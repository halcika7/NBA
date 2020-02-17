import { Injectable } from '@nestjs/common';
import { Team } from './teams.model';
import { Teams } from './teams.entity';

@Injectable()
export class TeamsService {
    getAllTeams(): Promise<Team[]> {
        return Teams.find();
    }

    getTeam(id: string): Promise<Team> {
        return Teams.findOne({ where: { id } });
    }
}
