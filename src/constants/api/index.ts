import { getAppVersion } from "@/utils/utils";
import { AxiosRequestConfig } from "axios";


enum TimeoutEnum {
  Standard = 2 * 60 * 1000, //2 secs
}

const CommonRequestHeaders: AxiosRequestConfig["headers"] = {
  "Content-Type": "application/json",
  "X-AppCreator-version": getAppVersion(),
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

const RequestHeaders = {
  Authorization: "authBearer",
};

enum StatusCodeEnum {
  Success = "Sucess",
  Failed = "Failed",
  UnknownError = "UnknownError",
}

const StatusCode = {
  Success: [200, 201],
  Failed: [400],
};

const ErrorCodes = {
  "1001": "Token expired",
};

const Constants_Api = {
  TimeoutEnum,
  CommonRequestHeaders,
  RequestHeaders,
  ErrorCodes,
  StatusCodeEnum,
  StatusCode,
};
export default Constants_Api;
