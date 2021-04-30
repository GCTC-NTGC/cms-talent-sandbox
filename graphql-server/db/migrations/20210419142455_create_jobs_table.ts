import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('jobs', function (table) {
    table.increments("id");
    table.json("title");
    table.json("description");
    table.integer("min_salary").nullable();
    table.integer("max_salary").nullable();
    table.date("close_date").nullable();
    table.date("start_date").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('jobs');
}
