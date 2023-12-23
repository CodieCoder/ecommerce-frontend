import React from "react";
import {
  FacebookAuthButton,
  GoogleAuthButton,
  TwitterAuthButton,
} from "../components/socialButtons";
import { SocialAuthButtonEnum } from "../constants";

const SocialAuthSignup: React.FC = () => {
  return (
    <div className="w-full mx-auto justify-center">
      <div className="m-1 ">
        <GoogleAuthButton type={SocialAuthButtonEnum.SignUp} />
      </div>
      <div className="m-1 ">
        <FacebookAuthButton type={SocialAuthButtonEnum.SignUp} />
      </div>
      {/* <div className="m-1 w-full">
        <TwitterAuthButton type={SocialAuthButtonEnum.SignUp} />
      </div> */}
    </div>
  );
};

export default SocialAuthSignup;
