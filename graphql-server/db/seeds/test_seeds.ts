import { Knex } from "knex";
import { applications } from "../seedData/applications";
import { jobs } from "../seedData/jobs";
import { users } from "../seedData/users";
import { resetAutoInc } from "../util/resetAutoInc";

export async function seed(knex: Knex): Promise<void> {
  // Applications must be deleted first and added last, because it has foreign keys from users and jobs.
  await knex("applications").del();
  await knex("users").del();
  await knex("jobs").del();

  await knex("users").insert(users);
  await knex("jobs").insert(jobs);
  await knex("applications").insert(applications);

  // Reset auto-increment sequence of any tables we inserted into with manually-set ids.
  await resetAutoInc(knex, "users");
  await resetAutoInc(knex, "jobs");
  await resetAutoInc(knex, "applications");
}
