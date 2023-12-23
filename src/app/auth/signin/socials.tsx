import React from "react";
import {
  FacebookAuthButton,
  GoogleAuthButton,
  TwitterAuthButton,
} from "../components/socialButtons";
import { SocialAuthButtonEnum } from "../constants";

const SocialAuthSignin: React.FC = () => {
  return (
    <div className="w-[95%] mx-auto ">
      <div className="m-1 w-full">
        <GoogleAuthButton type={SocialAuthButtonEnum.SignIn} />
      </div>
      <div className="m-1 w-full">
        <FacebookAuthButton type={SocialAuthButtonEnum.SignIn} />
      </div>
      {/* <div className="m-1 w-full">
        <TwitterAuthButton type={SocialAuthButtonEnum.SignUp} />
      </div> */}
    </div>
  );
};

export default SocialAuthSignin;
