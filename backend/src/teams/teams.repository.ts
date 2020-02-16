import { Repository, EntityRepository } from "typeorm";
import { Teams } from './teams.entity';

@EntityRepository(Teams)
export class TeamsRepository extends Repository<Teams> {}