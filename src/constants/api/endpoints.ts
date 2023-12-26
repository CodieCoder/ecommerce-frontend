export const ApiBaseUrlEnum = {
  BaseUrl: "http://localhost:4000/api/v1/",
};

export const Constants_Api_Endpoint = {
  User: {
    signup: "user/signup",
    signin: "user/signin",
  },
  Card: {
    save: "card",
  },
} as const;

export default ApiBaseUrlEnum;
