
export function up(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments("id");
    table.string("email").notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
  });
};

export function down(knex) {
  return knex.schema.dropTable('users');
};
