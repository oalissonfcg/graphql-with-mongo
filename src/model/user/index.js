import userType from "./typeDefs";
import userInputs from "./inputs"; // pode ser em qualquer ordem
import userResolvers from "./resolvers";
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} from "graphql";

const users = {
  type: GraphQLList(userType),
  resolve: userResolvers.getAllUsers,
};

const insertOneUser = {
  type: userType,
  args: {
    input: {
      type: GraphQLNonNull(userInputs.userInputType),
    },
  },
  resolve: userResolvers.createOneUser,
};

const deleteOneUser = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve: userResolvers.removeOneUser,
};

const inserOneUserWithAddress = {
  type: userType,
  args: {
    input: {
      type: GraphQLNonNull(userInputs.userInputType),
    },
  },
  resolve: userResolvers.createOneUserWithAddresses,
};

const schema = {
  queries: {
    users,
  },
  mutation: {
    insertOneUser,
    deleteOneUser,
    inserOneUserWithAddress,
  },
};

export default schema;
