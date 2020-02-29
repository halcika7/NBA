import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Players1582821037000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'players',
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
                        name: 'full_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'position',
                        type: 'varchar',
                        length: '4',
                        isNullable: true
                    },
                    {
                        name: 'height',
                        type: 'varchar',
                        length: '5'
                    },
                    {
                        name: 'weight',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'birth_date',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'birth_place',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'retired',
                        type: 'boolean'
                    },
                    {
                        name: 'player_url',
                        type: 'varchar'
                    },
                    {
                        name: 'current_team_id',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'teams',
                        type: 'json'
                    },
                    {
                        name: 'injured',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'text',
                        type: 'text',
                        isNullable: true
                    },
                    {
                        name: 'image_url',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'players',
            new TableForeignKey({
                columnNames: ['current_team_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'teams',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('players');
    }
}
