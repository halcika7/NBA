import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'games' })
export class Game extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column('int')
    home_team_id: number;

    @Column('int')
    home_team_score: number;

    @Column('int')
    away_team_id: number;

    @Column('int')
    away_team_score: number;

    @Column('json')
    away_team_scores: string;

    @Column('json')
    home_team_scores: string;

    @Column('int', { nullable: true })
    number_of_ots: number;

    @Column('date')
    date: Date;

    @Column('int', { nullable: true })
    attendance: number;

    @Column('boolean')
    playoff: boolean;

    @Column('varchar', { length: 7 })
    season: string;

    @Column('varchar', { nullable: true, length: 150 })
    notes: string;
}
