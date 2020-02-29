import { MigrationInterface, QueryRunner, TableForeignKey, Table } from 'typeorm';

export class Coaches1582921790240 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'coaches',
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
                        name: 'birth',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'died',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'high_school',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'college',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'started_coaching',
                        type: 'int'
                    },
                    {
                        name: 'last_coached_season',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'years_coaching',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'retired',
                        type: 'boolean'
                    },
                    {
                        name: 'currently_coaching',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'all_teams_coached',
                        type: 'json'
                    },
                    {
                        name: 'link',
                        type: 'varchar',
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
            'coaches',
            new TableForeignKey({
                columnNames: ['currently_coaching'],
                referencedColumnNames: ['id'],
                referencedTableName: 'teams',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('coaches');
    }
}
