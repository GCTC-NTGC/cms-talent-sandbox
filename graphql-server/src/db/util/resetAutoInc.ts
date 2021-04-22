import { Knex } from "knex";

export function resetAutoInc(knex: Knex, table: string, column = "id") {
  return knex.raw(`SELECT setval(pg_get_serial_sequence('${table}', '${column}'), coalesce(max(${column}),0)+1,false) FROM ${table}`)
}