import { ApolloServer } from "apollo-server";
import { UserDataSource } from "./datasources/user";
import { JobDataSource } from "./datasources/job";
import { ApplicationDataSource } from "./datasources/application";
import knexConfig from "../knexfile.js";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

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
  dataSources,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
