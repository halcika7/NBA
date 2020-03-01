import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'players' })
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar', { nullable: true })
    full_name: string;

    @Column('varchar', { length: 4, nullable: true })
    position: string;

    @Column('varchar', { length: 5 })
    height: string;

    @Column('int', { nullable: true })
    weight: number;

    @Column('date', { nullable: true })
    birth_date: Date;

    @Column('varchar', { nullable: true })
    birth_place: string;

    @Column('boolean')
    retired: boolean;

    @Column('varchar')
    player_url: string;

    @Column('int', { nullable: true })
    current_team_id: number;

    @Column('json')
    teams: string;

    @Column('boolean')
    injured: boolean;

    @Column('text', { nullable: true })
    text: string;

    @Column('varchar')
    image_url: string;
}
