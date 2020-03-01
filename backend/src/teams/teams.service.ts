import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Team } from './teams.model';
import { Team as Teams } from './entities/teams.entity';

@Injectable()
export class TeamsService {

    constructor(private readonly entityManager: EntityManager) {}

    getAllTeams(): Promise<Team[]> {
        return Teams.find();
    }

    getTeam(id: string): Promise<Team> {
        return Teams.findOne({ where: { id } });
    }

    getSeasonStats(): Promise<any> {
        return Teams.query(`
            SELECT 
                t.name,
                count(CASE
                    WHEN g.home_team_id = t.id and g.home_team_score > g.away_team_score THEN 1
                    WHEN g.away_team_id = t.id and g.away_team_score > g.home_team_score THEN 1
                END) AS wins,
                count(CASE
                    WHEN g.home_team_id = t.id and g.home_team_score < g.away_team_score THEN 1
                    WHEN g.away_team_id = t.id and g.away_team_score < g.home_team_score THEN 1
                END) AS losses,
                round(
                    avg(
                        CAST(
                            CASE
                                WHEN g.home_team_id = t.id THEN g.home_team_score
                                WHEN g.away_team_id = t.id THEN g.away_team_score
                            END AS INT
                        )
                    ), 1
                ) AS avg_scores,
                round(
                    avg(
                        CAST(
                            CASE
                                WHEN g.home_team_id = t.id THEN g.away_team_score
                                WHEN g.away_team_id = t.id THEN g.home_team_score
                            END AS INT
                        )
                    ), 1
                )AS avg_opponent_scores,
                round(
                    CAST(
                        count(
                            CASE
                                WHEN g.home_team_id = t.id and g.home_team_score > g.away_team_score THEN 1
                                WHEN g.away_team_id = t.id and g.away_team_score > g.home_team_score THEN 1
                            END
                        ) AS decimal
                    ) / count(g.id) * 100, 1
                ) AS w_l_p
            FROM public.teams AS t
                LEFT JOIN public.games AS g
                ON t.id = g.home_team_id OR t.id = g.away_team_id
            WHERE g.season = '2019-20'
            GROUP BY t.id
            ORDER BY t.conference ASC, w_l_p DESC;`
        );
    }
}
