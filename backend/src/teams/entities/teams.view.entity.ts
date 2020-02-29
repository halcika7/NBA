import { ViewEntity, ViewColumn } from 'typeorm';

const getCurrentSeason = (): string => {
    const date = new Date()
    const currentYear = date.getFullYear();
    const year = currentYear - 1;
    return `${year.toString()}-${currentYear.toString().slice(2)}`;
}

@ViewEntity({
    expression: `
        SELECT 
            t.name AS team_name,
            count(CASE
                WHEN g.home_team_id = t.id and g.home_team_score > g.away_team_score THEN 1
                WHEN g.away_team_id = t.id and g.away_team_score > g.home_team_score THEN 1
            END)::int AS wins,
            count(CASE
                WHEN g.home_team_id = t.id and g.home_team_score < g.away_team_score THEN 1
                WHEN g.away_team_id = t.id and g.away_team_score < g.home_team_score THEN 1
            END)::int AS losses,
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
            ) AS avg_opponent_scores,
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
        WHERE g.season = '${getCurrentSeason()}'
        GROUP BY t.id
        ORDER BY t.conference ASC, w_l_p DESC;
`
})
export class TeamSeason {
    @ViewColumn()
    team_name: string;

    @ViewColumn()
    wins: number;

    @ViewColumn()
    losses: number;

    @ViewColumn()
    avg_scores: number;

    @ViewColumn()
    avg_opponent_scores: number;

    @ViewColumn()
    w_l_p: number;

}
