import { Knex } from "knex";
import BasicDataSource from "./basicDataSource";

export class UserDataSource extends BasicDataSource {
  constructor(config: Knex.Config | Knex) {
    super(config, "users");
  }
}

export default UserDataSource;