
export function up(knex) {
  return knex.schema.createTable('jobs', function (table) {
    table.increments("id");
    table.json("title");
    table.json("description");
    table.integer("minSalary").nullable();
    table.integer("maxSalary").nullable();
    table.date("closeDate").nullable();
    table.date("startDate").nullable();
  });
};

export function down(knex) {
  return knex.schema.dropTable('jobs');
};
