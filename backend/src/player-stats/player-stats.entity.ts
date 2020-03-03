import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Index,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Game } from 'games/games.entity';
import { Team } from 'teams/entities/teams.entity';
import { Player } from 'players/players.entity';

@Entity({ name: 'player_stats' })
@Index('IDX__PLAYER_STATS_1', ['season', 'playoff', 'team_id'])
export class PlayerStat extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @ManyToOne(type => Game)
    @JoinColumn({ name: 'game_id' })
    game_id: number;

    @ManyToOne(type => Team)
    @JoinColumn({ name: 'team_id'})
    team_id: number;

    @ManyToOne(type => Team)
    @JoinColumn({ name: 'opponent_team_id'})
    opponent_team_id: number;

    @ManyToOne(type => Player)
    @JoinColumn({ name: 'player_id'})
    player_id: number;

    @Column('double precision', { nullable: true })
    minutes: number;

    @Column('int', { nullable: true })
    fg: number;

    @Column('int', { nullable: true })
    fga: number;

    @Column('double precision', { nullable: true })
    fgp: number;

    @Column('int', { nullable: true })
    fg3: number;

    @Column('int', { nullable: true })
    fg3a: number;

    @Column('double precision', { nullable: true })
    fg3p: number;

    @Column('int', { nullable: true })
    ft: number;

    @Column('int', { nullable: true })
    fta: number;

    @Column('double precision', { nullable: true })
    ftp: number;

    @Column('int', { nullable: true })
    orb: number;

    @Column('int', { nullable: true })
    drb: number;

    @Column('int', { nullable: true })
    trb: number;

    @Column('int', { nullable: true })
    ast: number;

    @Column('int', { nullable: true })
    stl: number;

    @Column('int', { nullable: true })
    blk: number;

    @Column('int', { nullable: true })
    tov: number;

    @Column('int', { nullable: true })
    pf: number;

    @Column('int', { nullable: true })
    pts: number;

    @Column('int', { nullable: true })
    plus_minus: number;

    @Column('varchar', { nullable: true })
    reason_not_to_play: string;

    @Column('boolean', { nullable: true })
    reserve: boolean;

    @Column('varchar')
    season: string;

    @Column('boolean')
    playoff: boolean;
}
