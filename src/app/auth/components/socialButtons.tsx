import React from "react";
import { CustomButton } from "@/components/buttons";
import { SocialAuthButtonEnum } from "../constants";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const ButtonPropsGoogle = {
  SignIn: {
    label: "Sign in with Google",
    link: "https://google.com/auth",
  },
  SignUp: {
    label: "Signup with Google",
    link: "https://google.com/auth",
  },
};

export const GoogleAuthButton: React.FC<{ type: SocialAuthButtonEnum }> = ({
  type,
}) => {
  return (
    <CustomButton
      label={ButtonPropsGoogle[type].label}
      className="w-full bg-red-600 hover:bg-red-500 p-1"
      // role={""}
    >
      <div className="w-full text-start flex space-x-2">
        <div className="w-[12%] border-e-[1px] pt-[3px] border-gray-300">
          <BsGoogle />
        </div>
        <div className="text-center w-full">
          {ButtonPropsGoogle.SignUp.label}
        </div>
      </div>
    </CustomButton>
  );
};

const ButtonPropsFacebook = {
  SignIn: {
    label: "Sign in with Facebook",
    link: "https://facebook.com/auth",
  },
  SignUp: {
    label: "Signup with Facebook",
    link: "https://facebook.com/auth",
  },
};

export const FacebookAuthButton: React.FC<{ type: SocialAuthButtonEnum }> = ({
  type,
}) => {
  return (
    <CustomButton
      label={ButtonPropsFacebook[type].label}
      className="w-full bg-blue-700 hover:bg-blue-600 p-1"
    >
      <div className="w-full text-start flex space-x-2">
        <div className="w-[12%] border-e-[1px] pt-[3px] border-gray-300">
          <FaFacebookF />
        </div>
        <div className="text-center w-full">
          {ButtonPropsFacebook.SignUp.label}
        </div>
      </div>
    </CustomButton>
  );
};

const ButtonPropsTwitter = {
  SignIn: {
    label: "Sign in with Twitter",
    link: "https://twitter.com/auth",
  },
  SignUp: {
    label: "Signup with Twitter",
    link: "https://twitter.com/auth",
  },
};

export const TwitterAuthButton: React.FC<{ type: SocialAuthButtonEnum }> = ({
  type,
}) => {
  return (
    <CustomButton label={ButtonPropsTwitter[type].label} className="w-full" />
  );
};
