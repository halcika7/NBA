import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Index,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Team } from 'teams/entities/teams.entity';

@Entity({ name: 'games' })
@Index('IDX__GAMES_1', ['season', 'playoff', 'home_team_id'])
@Index('IDX__GAMES_2', ['season', 'playoff', 'away_team_id'])
export class Game extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @ManyToOne(type => Team)
    @JoinColumn({ name: 'home_team_id' })
    home_team_id: number;

    @Column('int')
    home_team_score: number;

    @ManyToOne(type => Team)
    @JoinColumn({ name: 'away_team_id' })
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
