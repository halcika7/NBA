import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

export class PlayerStats1583007541461 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'player_stats',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'game_id',
                        type: 'int'
                    },
                    {
                        name: 'team_id',
                        type: 'int'
                    },
                    {
                        name: 'opponent_team_id',
                        type: 'int'
                    },
                    {
                        name: 'player_id',
                        type: 'int'
                    },
                    {
                        name: 'minutes',
                        type: 'double precision',
                        isNullable: true
                    },
                    {
                        name: 'fg',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'fga',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'fgp',
                        type: 'double precision',
                        isNullable: true
                    },
                    {
                        name: 'fg3',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'fg3a',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'fg3p',
                        type: 'double precision',
                        isNullable: true
                    },
                    {
                        name: 'ft',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'fta',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'ftp',
                        type: 'double precision',
                        isNullable: true
                    },
                    {
                        name: 'orb',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'drb',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'trb',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'ast',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'stl',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'blk',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'tov',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'pf',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'pts',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'plus_minus',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'reason_not_to_play',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'reserve',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'season',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'playoff',
                        type: 'boolean',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'player_stats',
            new TableForeignKey({
                columnNames: ['game_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'games',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'player_stats',
            new TableForeignKey({
                columnNames: ['team_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'teams',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'player_stats',
            new TableForeignKey({
                columnNames: ['opponent_team_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'teams',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'player_stats',
            new TableForeignKey({
                columnNames: ['player_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'players',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createIndex(
            'player_stats',
            new TableIndex({
                name: 'IDX__PLAYER_STATS_1',
                columnNames: ['season', 'playoff', 'team_id']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('player_stats');
    }
}
