import { Knex } from "knex";
import BasicDataSource from "./basicDataSource";

export class JobDataSource extends BasicDataSource {
  constructor(config: Knex.Config | Knex) {
    super(config, "jobs");
  }
}

export default JobDataSource;
