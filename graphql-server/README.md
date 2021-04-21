## Getting Started
Run `npm run start` from this directory to start a GraphQL API server. You can explore the GraphQL API at http://localhost:4000.

Note that you will need a `.env` file that specifies the connection to your postgres database.

### Data migrations
If you want to edit the database schema, do so using knex.js migrations. 

To create a new migration, run `npx knex migrate:make migration_name`. (Note that, for now, new migrations are created using `module.exports` syntax, and you must manually change this to ES6 module syntax.) The new migration will appear in `./src/db/migrations` (as specified in the knexfile.js config file).

To run migrations, run `npx knex migrate:latest`.

To rollback the most recent batch of migrations, run `npx knex migrate:rollback`. 

For more details on how to write migrations see https://knexjs.org/#Schema.

For more details on how the migrations CLI, see https://knexjs.org/#Migrations.