const {
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_TIMEZONE,
} = process.env;

module.exports = {
  type: DB_DIALECT,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  timezone: DB_TIMEZONE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: true,
  logging: true,
  logger: 'advanced-console',
};
