
export function up(knex) {
  return knex.schema.createTable('applications', function (table) {
    table.increments("id");
    table.text("interest").nullable();
    table.string("preferred_lang").nullable();
    table.integer("user_id").notNullable();
    table.integer("job_id").notNullable();

    table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE");
    table.foreign("job_id").references("id").inTable("jobs").onDelete("NO ACTION").onUpdate("CASCADE");
  })
};

export function down(knex) {
  return knex.schema.dropTable("applications");
};
