import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Teams extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('varchar', { length: 3 })
  short_name: string;

  @Column()
  years: number;

  @Column()
  total_games: number;

  @Column()
  total_wins: number;

  @Column()
  total_losses: number;

  @Column('double precision')
  win_loss_percentage: number;

  @Column()
  champions: number;

  @Column('json')
  other_names: string;

  @Column('varchar', { length: 11 })
  link: string;

  @Column()
  active: boolean;
}
