import axios from "axios";

declare const __API_URL__: string;

const TIMEOUT = 1 * 60 * 1000;

export const axiosInstance = axios.create({
  baseURL: __API_URL__,
  timeout: TIMEOUT,
});
