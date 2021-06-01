import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
} from "graphql";
import userResolvers from "./resolvers";
import addressType from "../address/typeDefs";

const userType = new GraphQLObjectType({
  name: "userType",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    login: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLBoolean,
    },
    addresses: {
      type: GraphQLList(addressType),
      resolve: userResolvers.getAddressesByUser,
    },
  }),
});

export default userType;
