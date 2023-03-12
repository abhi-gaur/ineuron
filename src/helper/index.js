import { userApi } from "../config";

export const getUsers = async () => {
  return userApi.getUsers();
};

export const createUser = async (data) => {
  return userApi.createUser(data);
};

export const updateUser = async (data) => {
  return userApi.updateUser(data);
};

export const getUserById = (data) => {
  return userApi.getUserById(data);
};

export const deleteUser = (data) => {
  return userApi.deleteUser(data);
};
