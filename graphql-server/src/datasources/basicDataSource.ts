import { SQLDataSource } from "datasource-sql";
import { Knex } from "knex";
import { keysToCamel, keysToSnake } from "./util";

interface Entity {
  id: number
}

export class BasicDataSource extends SQLDataSource {
  table: string

  constructor(config: Knex.Config | Knex, table: string) {
    super(config as any);
    this.table = table;
  }

  create(item: any) {
    return this.knex(this.table).insert(keysToSnake(item)).then(keysToCamel);
  }
  getById(id: number) {
    return this.knex(this.table).where("id", id).select("*").first().cache().then(keysToCamel);
  }
  getAll() {
    return this.knex.select("*").from(this.table).cache().then(keysToCamel);
  }
  getWhere(props: Record<string, any>) {
    return this.knex.select("*").from(this.table).where(keysToSnake(props)).cache().then(keysToCamel);
  }
  update(item: Record<string, any> & Entity) {
    return this.knex(this.table).where("id", item.id).update(keysToSnake(item)).returning("*").then(keysToCamel);
  }
  deleteById(id: number) {
    return this.knex(this.table).where("id", id).delete();
  }
}

export default BasicDataSource;