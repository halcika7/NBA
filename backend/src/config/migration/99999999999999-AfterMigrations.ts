import { MigrationInterface, QueryRunner } from 'typeorm';
import { resolve } from 'path';

const teams_csv_path = resolve('./seeder/teams.csv');
const players_csv_path = resolve('./seeder/players.csv');
const coaches_csv_path = resolve('./seeder/coaches.csv');
const games_csv_path = resolve('./seeder/games.csv');
const game_player_data_csv_path1 = resolve('./seeder/game_player_data_1.csv');
const game_player_data_csv_path2 = resolve('./seeder/game_player_data_2.csv');

export class AfterMigrations1583070579935 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager.query(`
            COPY public.teams
                FROM '/Users/harisbeslic/temp/teams.csv'
            DELIMITER ',' CSV HEADER;
        
            COPY public.players
                FROM '/Users/harisbeslic/temp/players.csv'
            DELIMITER ',' CSV HEADER;
        
            COPY public.coaches
                FROM '/Users/harisbeslic/temp/coaches.csv'
            DELIMITER ',' CSV HEADER;
        
            COPY public.games
                FROM '/Users/harisbeslic/temp/games.csv'
            DELIMITER ',' CSV HEADER;
        
            COPY public.player_stats
                FROM '/Users/harisbeslic/temp/game_player_data_1.csv'
            WITH (
                FORMAT csv,
                NULL 'null',
                DELIMITER ',',
                FORCE_NULL(minutes,fg,fga,fgp,fg3,fg3a,fg3p,ft,fta,ftp,orb,drb,trb,ast,stl,blk,tov,pf,pts,plus_minus)
            );

            COPY public.player_stats
                FROM '/Users/harisbeslic/temp/game_player_data_2.csv'
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
