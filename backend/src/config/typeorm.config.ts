import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME } from './configs';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ['dist/**/*.entity.js'],
  synchronize: true
};
