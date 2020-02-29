import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class Teams1581459192272 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'teams',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'short_name',
                        type: 'varchar',
                        length: '3'
                    },
                    {
                        name: 'years',
                        type: 'int'
                    },
                    {
                        name: 'total_games',
                        type: 'int'
                    },
                    {
                        name: 'total_wins',
                        type: 'int'
                    },
                    {
                        name: 'total_losses',
                        type: 'int'
                    },
                    {
                        name: 'win_loss_percentage',
                        type: 'double precision'
                    },
                    {
                        name: 'champions',
                        type: 'int'
                    },
                    {
                        name: 'other_names',
                        type: 'json'
                    },
                    {
                        name: 'link',
                        type: 'varchar',
                        length: '11'
                    },
                    {
                        name: 'active',
                        type: 'boolean'
                    },
                    {
                        name: 'conference',
                        type: 'char'
                    },
                    {
                        name: 'image_url',
                        type: 'varchar'
                    },
                    {
                        name: 'text',
                        type: 'text'
                    }
                ]
            }),
            true
        );

        await queryRunner.createIndex(
            'teams',
            new TableIndex({
                name: 'IDX__TEAMS',
                columnNames: ['id', 'name', 'short_name']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('teams');
    }
}
