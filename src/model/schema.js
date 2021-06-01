import { GraphQLSchema, GraphQLObjectType } from "graphql";
import user from "./user";

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...user.queries,
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    ...user.mutation,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

export default schema;
