import axios from "axios";
import Cookies from "js-cookie";

declare const __API_URL__: string;

export const axiosInstance = axios.create({
  baseURL: __API_URL__,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
