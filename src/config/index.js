import axios from "axios";
import { endpoints } from "./endpoints";

const baseUrl = "https://blue-journalist-bbrpv.ineuron.app:4000"; //env
const headers = {
  "Content-Type": "application/json",
};

const get = async (data) => {
  const url = `${baseUrl}${data}`;
  try {
    const response = await axios.get(url, headers);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

const post = async (url, data) => {
  const postUrl = `${baseUrl}${url}`;
  try {
    const response = await axios.post(postUrl, data, headers);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

const patch = async (url, data) => {
  const postUrl = `${baseUrl}${url}`;
  try {
    const response = await axios.patch(postUrl, data, headers);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

const deleteMethod = async (url, data) => {
  const del = `${baseUrl}${url}`;
  try {
    const response = await axios.delete(postUrl, data, headers);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};


export const userApi = {
  getUsers: () => get(endpoints.getAllUsers),
  createUser: (data = {}) => post(endpoints.createUser, data),
  updateUser: (data = {}) => patch(endpoints.users, data),
  getUserById: (data = {}) => get(`${endpoints.users}${data}`),
  deleteUser: (data = {}) => deleteMethod(`${endpoints.users}${data}`)
};
