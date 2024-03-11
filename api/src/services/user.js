import User from "../models/User.js";

const createUser = async (user) => {
  return user.save();
};

const getUsers = async () => {
  return User.find();
};

const getUserById = async (id)=>{
  return User.findById(id)
}

const findUserByEmail = async (email) => {
  return User.findOne({ email: email });
};

const updateUserById = async (id, update) => {
  return User.findByIdAndUpdate(id, update, { new: true });
};

export default {
  createUser,
  getUsers,
  findUserByEmail,
  updateUserById,
  getUserById
};
