import Constants_Api from "@/constants/api";

const GetStatusCode = (statusCode: number) => {
  if (Constants_Api.StatusCode.Success.includes(statusCode)) {
    return Constants_Api.StatusCodeEnum.Success;
  } else if (Constants_Api.StatusCode.Failed.includes(statusCode)) {
    return Constants_Api.StatusCodeEnum.Failed;
  } else {
    return Constants_Api.StatusCodeEnum.UnknownError;
  }
};

const Utils_Api = {
  GetStatusCode,
};

export default Utils_Api;
