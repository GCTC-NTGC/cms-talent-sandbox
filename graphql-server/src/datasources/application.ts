import { Knex } from "knex";
import BasicDataSource from "./basicDataSource";
import { keysToCamel } from "./util";

export class ApplicationDataSource extends BasicDataSource {
  constructor(config: Knex.Config | Knex) {
    super(config, "applications");
  }

  getByUserId(id: number) {
    return this.getWhere({ user_id: id });
  }

  getByJobId(id: number) {
    return this.getWhere({ job_id: id });
  }

  getByJobAndUser(jobId: number, userId: number) {
    return this.getWhere({ jobId, userId });
  }
}

export default ApplicationDataSource;
