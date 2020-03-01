import { MigrationInterface, QueryRunner } from 'typeorm';
import { resolve } from 'path';

const teams_csv_path = resolve('./seeder/teams.csv');
const players_csv_path = resolve('./seeder/players.csv');
const coaches_csv_path = resolve('./seeder/coaches.csv');
const games_csv_path = resolve('./seeder/games.csv');
const game_player_data_csv_path1 = resolve('./seeder/game_player_data1.csv');
const game_player_data_csv_path2 = resolve('./seeder/game_player_data2.csv');

export class AfterMigrations1583070579935 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager.query(`
            COPY public.teams
                FROM '${teams_csv_path}'
            DELIMITER ',' CSV HEADER;
        
            COPY public.players
                FROM '${players_csv_path}'
            DELIMITER ',' CSV HEADER;
        
            COPY public.coaches
                FROM '${coaches_csv_path}'
            DELIMITER ',' CSV HEADER;
        
            COPY public.games
                FROM '${games_csv_path}'
            DELIMITER ',' CSV HEADER;
        
            COPY public.player_stats
                FROM '${game_player_data_csv_path1}'
            WITH (
                FORMAT csv,
                NULL 'null',
                DELIMITER ',',
                FORCE_NULL(minutes,fg,fga,fgp,fg3,fg3a,fg3p,ft,fta,ftp,orb,drb,trb,ast,stl,blk,tov,pf,pts,plus_minus)
            );

            COPY public.player_stats
                FROM '${game_player_data_csv_path2}'
            WITH (
                FORMAT csv,
                NULL 'null',
                DELIMITER ',',
                FORCE_NULL(minutes,fg,fga,fgp,fg3,fg3a,fg3p,ft,fta,ftp,orb,drb,trb,ast,stl,blk,tov,pf,pts,plus_minus)
            );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {}
}
