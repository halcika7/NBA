const { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME } = require('./dist/config/configs')

module.exports = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migration/**/*.js'],
  cli: {
    migrationsDir: 'dist/migration'
  },
  synchronize: true
};
