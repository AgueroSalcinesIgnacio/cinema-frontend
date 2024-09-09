import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./config/axios";
import { HttpResponse } from "./dto/HttpResponse";

export const apiGet = <T>(
  requestUrl: string,
  config?: AxiosRequestConfig
): Promise<HttpResponse<T>> => {
  try {
    return axiosInstance.get<T>(requestUrl, config);
  } catch (error) {
    console.error('Error on GET request: "%s"', error);
    throw error;
  }
};
