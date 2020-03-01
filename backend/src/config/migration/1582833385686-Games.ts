import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

export class Games1582833385686 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'games',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'home_team_id',
                        type: 'int'
                    },
                    {
                        name: 'home_team_score',
                        type: 'int'
                    },
                    {
                        name: 'away_team_id',
                        type: 'int'
                    },
                    {
                        name: 'away_team_score',
                        type: 'int'
                    },
                    {
                        name: 'away_team_scores',
                        type: 'json'
                    },
                    {
                        name: 'home_team_scores',
                        type: 'json'
                    },
                    {
                        name: 'number_of_ots',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'date',
                        type: 'date'
                    },
                    {
                        name: 'attendance',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'playoff',
                        type: 'boolean'
                    },
                    {
                        name: 'season',
                        type: 'varchar',
                        length: '7'
                    },
                    {
                        name: 'notes',
                        type: 'varchar',
                        length: '150',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'games',
            new TableForeignKey({
                columnNames: ['home_team_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'teams',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'games',
            new TableForeignKey({
                columnNames: ['away_team_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'teams',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createIndex(
            'teams',
            new TableIndex({
                name: 'IDX__GAMES',
                columnNames: ['id', 'season', 'playoff', 'away_team_id', 'home_team_id', 'date']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('games');
    }
}
