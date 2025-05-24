import axios from "axios";
import { time } from "console";

const options = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    if (status === "Unauthorized" && status === "401") {
      return Promise.reject({ ...data, status });
    }
    return Promise.reject({ ...data, status });
  }
);

export default API;
