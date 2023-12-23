import { IRegistrationForm, ISignInForm } from "@/app/auth/types";
import { Constants_Api_Endpoint } from "@/constants/api/endpoints";
import ApiService from "@/lib/axios";

export const signUp = async (data: IRegistrationForm) => {
  return ApiService.post(Constants_Api_Endpoint.User.signup, data);
  // .then((response: AxiosResponse<any>) => response)
  // .catch((error) => error);
};

export const signIn = async (data: ISignInForm) => {
  return ApiService.post(Constants_Api_Endpoint.User.signin, data);
};
