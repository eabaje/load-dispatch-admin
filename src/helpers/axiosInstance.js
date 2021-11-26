import axios from "axios";
import AsyncLocalStorage from '@createnextapp/async-local-storage'
//import envs from "../config/env";
import { API_URL } from "../constants";

let headers = {};

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncLocalStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      // history.push(`/${LOGOUT}`);

      AsyncLocalStorage.removeItem("token");
      //  navigate(LOGOUT, { tokenExpired: true });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;
