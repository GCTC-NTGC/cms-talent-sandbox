import { DateResolver, EmailAddressResolver } from "graphql-scalars";

export const resolvers = {
  Date: DateResolver,
  EmailAddress: EmailAddressResolver,
  Locale: {
    EN: "en",
    FR: "fr",
  },
  JobStatus: {
    DRAFT: "draft",
    PUBLISHED: "published",
  },
  ApplicationStatus: {
    DRAFT: "draft",
    SUBMITTED: "submitted",
  },
  Query: {
    users: async (_parent, _args, { dataSources }) => {
      return dataSources.user.getAll();
    },
    user: async (_parent, { id }, { dataSources }) => {
      return dataSources.user.getById(id);
    },
    jobs: async (_parent, _args, { dataSources }) => {
      return dataSources.job.getAll();
    },
    job: async (_parent, { id }, { dataSources }) => {
      return dataSources.job.getById(id);
    },
    applications: async (_parent, _args, { dataSources }) => {
      return dataSources.application.getAll();
    },
    application: async (_parent, { id }, { dataSources }) => {
      return dataSources.application.getById({ id });
    },
    applicationsByJob: async (_parent, { jobId }, { dataSources }) => {
      return dataSources.application.getByJobId(jobId);
    },
  },
  Mutation: {
    createJob: async (_parent, { job }, { dataSources }) => {
      // All jobs start as drafts.
      // TODO: Should this be here in the resolver, or in the Model/Data Source?
      return dataSources.job.create({ ...job, status: "draft" });
    },
    updateJob: async (_parent, { id, job }, { dataSources }) => {
      return dataSources.job.update(id, job);
    },
    publishJob: async (_parent, { id }, { dataSources }) => {
      return dataSources.job.update(id, { status: "published" });
    },
  },
  Application: {
    job(parent, _args, { dataSources }) {
      return dataSources.job.getById(parent.jobId);
    },
    user(parent, _args, { dataSources }) {
      return dataSources.user.getById(parent.userId);
    },
  },
};

export default resolvers;
