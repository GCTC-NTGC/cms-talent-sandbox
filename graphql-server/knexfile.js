import dotenv from "dotenv";

const parsed = dotenv.config();

const config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/db/migrations'
  }
};

export default config;
