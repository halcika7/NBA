import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Team } from './teams.model';
import { Team as Teams } from './entities/teams.entity';
import { season_team_stats_query } from './../sql-queries/season-team-stats';

@Injectable()
export class TeamsService {
    constructor(private readonly entityManager: EntityManager) {}

    getAllTeams(): Promise<Team[]> {
        return Teams.find();
    }

    getTeam(id: string): Promise<Team> {
        return Teams.findOne({ where: { id } });
    }

    getSeasonStats(season: string): Promise<any> {
        const query = season_team_stats_query(season);
        return Teams.query(query);
    }
}
