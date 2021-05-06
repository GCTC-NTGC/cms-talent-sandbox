import { gql } from "apollo-server-core";

export const typeDefs = gql`
  scalar Date
  scalar EmailAddress

  type LocalizedField {
    en: String
    fr: String
  }

  enum Locale {
    EN
    FR
  }

  type User {
    id: ID
    email: EmailAddress!
    firstName: String!
    lastName: String!
  }

  enum JobStatus {
    DRAFT
    PUBLISHED
  }

  type Job {
    id: ID
    title: LocalizedField
    description: LocalizedField
    minSalary: Int
    maxSalary: Int
    closeDate: Date
    startDate: Date
    status: JobStatus!
  }

  enum ApplicationStatus {
    DRAFT
    SUBMITTED
  }

  type Application {
    id: ID
    job: Job!
    user: User!
    interest: String
    preferredLang: Locale
    status: ApplicationStatus
  }

  type Query {
    users: [User]
    user(id: ID!): User
    jobs: [Job]
    job(id: ID!): Job
    applications: [Application]
    application(id: ID!): Application
    applicationsByJob(jobId: ID!): [Application]
  }

  input LocalizedFieldInput {
    en: String
    fr: String
  }

  input JobInput {
    title: LocalizedFieldInput
    description: LocalizedFieldInput
    minSalary: Int
    maxSalary: Int
    closeDate: Date
    startDate: Date
  }

  type Mutation {
    createJob(job: JobInput): Job
    updateJob(id: ID!, job: JobInput!): Job
    publishJob(id: ID!): Job
  }
`;

export default typeDefs;
