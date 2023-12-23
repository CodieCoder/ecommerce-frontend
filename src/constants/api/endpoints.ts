export const ApiBaseUrlEnum = {
  BaseUrl: "http://localhost:4000/api/v1/",
};

export const Constants_Api_Endpoint = {
  User: {
    signup: "user/signup",
    signin: "user/signin",
  },
} as const;

export default ApiBaseUrlEnum;
