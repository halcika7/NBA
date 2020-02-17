import { Teams } from '../../teams/teams.entity';
import { MigrationInterface, QueryRunner, Table, TableIndex, getConnection } from 'typeorm';
import { join } from 'path';
import * as fs from 'fs';

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
          }
        ]
      }),
      true
    );

    let file_path = join(__dirname, '../../../csvs/teams.json');
    let file = JSON.parse(fs.readFileSync(file_path, 'utf-8'));
    
    await file.map(
      async data =>
        await getConnection()
          .createQueryBuilder()
          .insert()
          .into(Teams)
          .values([data])
          .execute()
    );

    await queryRunner.createIndex(
      'teams',
      new TableIndex({
        name: 'IDX_QUESTION_NAME',
        columnNames: ['id', 'name', 'short_name']
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('teams');
  }
}
