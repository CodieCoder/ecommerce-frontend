import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Api_localStorage from "@/utils/localStore/localStorage";
import Constants_Api from "@/constants/api";
import { NextResponse } from "next/server";
import ApiBaseUrlEnum, {
  Constants_Api_Endpoint,
  // ApiBaseUrlEnum,
} from "@/constants/api/endpoints";
import { redirect } from "next/navigation";

const ApiService: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1/", // for local development
  // headers: Constants_Api.RequestHeaders,
  timeout: Constants_Api.TimeoutEnum.Standard,
});

ApiService.interceptors.request.use(
  (request: InternalAxiosRequestConfig<any>) => {
    const token = Api_localStorage.get<string | null | undefined>(
      Constants_Api.RequestHeaders.Authorization
    );
    if (token && request.headers) {
      request.headers.Authorization = `${Constants_Api.RequestHeaders.Authorization} ${token}`;
      request.headers.AuthToken = token;
      request.headers["x-access-app"] = "WebApplication";
    }
    return request;
  }
);

ApiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const interceptResponse: AxiosResponse = error.response;

    const { data } = interceptResponse;
    //** TODO : */
    //   const httpStatusCode = interceptResponse.status;
    //   const requestURL = interceptResponse.config.url;

    const { statusCode } = data;

    if (statusCode === Constants_Api.ErrorCodes[1001]) {
      Api_localStorage.resetStore();
      redirect("/auth/signin");
      // return Promise.reject({
      //   message: ["User needs to login"],
      //   error: "Bad Request",
      //   statusCode: 400,
      // });
    }

    return Promise.reject(
      error?.response?.data ?? {
        message: ["Unknown error"],
        error: "Bad Request",
        statusCode: 400,
      }
    );
  }
);

export default ApiService;
