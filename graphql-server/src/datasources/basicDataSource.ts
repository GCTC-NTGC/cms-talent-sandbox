import { SQLDataSource } from "datasource-sql";
import { Knex } from "knex";
import { keysToCamel, keysToSnake } from "./util";

interface Entity {
  id: number;
}

export class BasicDataSource extends SQLDataSource {
  table: string;

  constructor(config: Knex.Config | Knex, table: string) {
    super(config as never);
    this.table = table;
  }

  create(item: Record<string, unknown>) {
    // The implementation is actually identical to createMany, except we know to only return a single item.
    return this.createMany([item]).then((items) => items[0]); // Returns undefined if no row was created.
  }
  createMany(items: Array<Record<string, unknown>>) {
    return this.knex(this.table)
      .insert(keysToSnake(items))
      .returning("*")
      .then(keysToCamel);
  }
  getById(id: number) {
    return this.knex(this.table)
      .where("id", id)
      .select("*")
      .first()
      .cache()
      .then(keysToCamel);
  }
  getAll() {
    return this.knex.select("*").from(this.table).cache().then(keysToCamel);
  }
  getWhere(props: Record<string, unknown>) {
    return this.knex
      .select("*")
      .from(this.table)
      .where(keysToSnake(props))
      .cache()
      .then(keysToCamel);
  }
  update(id: number, item: Record<string, unknown>) {
    return this.knex(this.table)
      .where("id", id)
      .update(keysToSnake(item))
      .returning("*")
      .then(keysToCamel)
      .then((items) => items[0]); // Returns undefined if no row was updated.
  }
  deleteById(id: number) {
    return this.knex(this.table).where("id", id).delete();
  }
}

export default BasicDataSource;
