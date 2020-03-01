import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'teams' })
export class Team extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar', { length: 3 })
    short_name: string;

    @Column('int')
    years: number;

    @Column('int')
    total_games: number;

    @Column('int')
    total_wins: number;

    @Column('int')
    total_losses: number;

    @Column('double precision')
    win_loss_percentage: number;

    @Column('int')
    champions: number;

    @Column('json')
    other_names: string;

    @Column('varchar', { length: 11 })
    link: string;

    @Column('boolean')
    active: boolean;

    @Column('char')
    conference: string;

    @Column('varchar', { nullable: true })
    image_url: string;

    @Column('text', { nullable: true })
    text: string;
}
