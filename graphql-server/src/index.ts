// import { ApolloServer } from "apollo-server";
import { ApolloServer, gql } from 'apollo-server';
import { DateResolver, EmailAddressResolver } from "graphql-scalars";
import {UserDataSource} from "./datasources/user";
import {JobDataSource} from "./datasources/job";
import {ApplicationDataSource} from "./datasources/application";
import knexConfig from "../knexfile.js";

const typeDefs = gql`

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

  type Job {
    id: ID
    title: LocalizedField
    description: LocalizedField
    minSalary: Int
    maxSalary: Int
    closeDate: Date
    startDate: Date
  }

  type Application {
    id: ID
    job: Job!
    user: User!
    interest: String
    preferredLang: Locale
  }

  type Query {
    users: [User]
    user(id: ID!): User
    jobs: [Job]
    applications: [Application]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Date: DateResolver,
  EmailAddress: EmailAddressResolver,
  Locale: {
    EN: "en",
    FR: "fr",
  },
  Query: {
    users: async (_parent, _args, {dataSources} ) => {
      return dataSources.user.getAll();
    },
    user: async (_parent, {id}, {dataSources}) => {
      return dataSources.user.getById(id);
    },
    jobs: async (_parent, _args, {dataSources} ) => {
      return dataSources.job.getAll();
    },
    applications: async (_parent, _args, {dataSources}) => {
      return dataSources.application.getAll();
    }
  },
  Application: {
    job(parent, _args, {dataSources}) {
      return dataSources.job.getById(parent.jobId);
    }, 
    user(parent, _args, {dataSources}) {
      return dataSources.user.getById(parent.userId);
    }
  }
};

const dataSources = () => ({
  user: new UserDataSource(knexConfig),
  job: new JobDataSource(knexConfig),
  application: new ApplicationDataSource(knexConfig),
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});