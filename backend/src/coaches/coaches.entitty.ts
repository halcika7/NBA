import { Team } from 'teams/entities/teams.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'coaches' })
export class Coach extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column('varchar')
    name: string;

    @Column('date', { nullable: true })
    birth: Date;

    @Column('varchar', { nullable: true })
    high_school: string;

    @Column('varchar', { nullable: true })
    college: string;

    @Column('int')
    started_coaching: number;

    @Column('int')
    last_coached_season: number;

    @Column('int')
    years_coaching: number;

    @Column('boolean')
    retired: boolean;

    @OneToOne(type => Team)
    @JoinColumn({ name: 'currently_coaching' })
    currently_coaching: number;

    @Column('json')
    all_teams_coached: string;

    @Column('varchar')
    link: string;

    @Column('text', { nullable: true })
    text: string;

    @Column('varchar', { nullable: true })
    image_url: string;
}
