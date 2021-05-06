/* eslint-disable @typescript-eslint/no-var-requires */
require("ts-node/register");
const dotenv = require("dotenv");

const parsed = dotenv.config();

const config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
  seeds: {
    directory: "./src/db/seeds", // This could be split into dev and production folders.
  },
};

// export default config;
module.exports = config;
