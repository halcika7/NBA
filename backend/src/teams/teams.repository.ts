import { Repository, EntityRepository } from "typeorm";
import { Team } from './entities/teams.entity';

@EntityRepository(Team)
export class TeamsRepository extends Repository<Team> {}