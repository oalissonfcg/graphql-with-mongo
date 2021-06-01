import userModel from "./model";
import addressModel from "../address/model";

const createOneUser = async (_, args) => {
  return await userModel.create(args.input);
};

const getAllUsers = async () => {
  return await userModel.find();
};

const removeOneUser = async (_, { id }) => {
  return !!(await userModel.findByIdAndRemove(id));
};

const createOneUserWithAddresses = async (_, { input }) => {
  const { addresses } = input;
  const createUser = await userModel.create(input);
  //função callback
  addresses.map(async (address) => {
    address.user_id = createUser._id;
    await addressModel.create(address);
  });
  return await userModel.findById(createUser._id);
};

const getAddressesByUser = async (parent) => {
  return await addressModel.find({ user_id: parent.id });
};

const getUserById = async (parent) => {
  return await userModel.findById(parent.user_id);
};

const userResolvers = {
  createOneUser,
  getAllUsers,
  removeOneUser,
  createOneUserWithAddresses,
  getAddressesByUser,
  getUserById,
};

export default userResolvers;
