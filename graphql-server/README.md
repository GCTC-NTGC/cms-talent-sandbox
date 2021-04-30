## Getting Started

Run `npm run start` from this directory to start a GraphQL API server. You can explore the GraphQL API at http://localhost:4000.

Note that you will need a `.env` file that specifies the connection to your PostgreSQL database.

Since this project is written in TypeScript, you may compile it to JS by running `npm run build`. The result will be in `./dist`.

### Data migrations

If you want to edit the database schema, do so using knex.js migrations.

To create a new migration, run `npx knex migrate:make migration_name`. The new migration will appear in `./db/migrations` (as specified in the knexfile.js config file).

Use the npm scripts `db:migrate`, `db:rollback`, `db:refresh`, and `db:seed` to run/rollback migrations and seeders.

You may also run `npm run db:repl` to experiment with knex commands directly in the console. e.g. `await knex('users').where({id: 1})`

For more details on how to write migrations and seeds or use migrations CLI, see https://knexjs.org/.
