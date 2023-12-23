import { AccountTypesEnum, GenderEnum } from "./constants";

export interface IRegistrationForm {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
  gender: GenderEnum;
  dateOfBirth: string;
  country: string;
  accountType: AccountTypesEnum;
  registrationDevice: string;
  registrationIpAddress?: string;
}

export interface ISignInForm {
  email: string;
  password: string;
}
