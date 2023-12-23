import React from "react";
import SocialAuthSignup from "./socials";
import SignupForm from "./signupForm";
import { CustomButton } from "@/components/buttons";
import { AuthPage } from "../constants";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex h-full w-full">
      <div
        className={
          "h-auto rounded px-6 pb-3 pt-1 bg-white w-[96%] mx-auto mt-12 lg:mt-0 lg:w-[32rem] lg:self-center"
        }
      >
        <div className="text-center">
          <div className="text-2xl font-semibold tracking-tight">
            Join the global market in minutes
          </div>
          {/* <div className="">
            You can start selling to a global market in minutes
          </div> */}
        </div>
        <div className="mt-2">
          {/* <SocialAuthSignup /> */}
          <div>
            Click here to sign up with Google, Facebook, Twiteer and more
          </div>
          <SignupForm />
          <div className="w-full text-center mt-2">
            <div className="text-center">
              <Link href={AuthPage.Signin}>
                Already a member?{" "}
                <span className="text-sky-600 font-semibold">Signin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
