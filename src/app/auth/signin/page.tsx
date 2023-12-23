import React from "react";
import SocialAuthSignin from "./socials";
import SigninForm from "./signinForm";
import Link from "next/link";
import { AuthPage } from "../constants";
import { CustomButton } from "@/components/buttons";

const SigninPage: React.FC = () => {
  return (
    <div className="flex h-full w-full">
      <div
        className={
          "h-auto rounded px-6 py-4 bg-white w-[96%] mx-auto mt-12 lg:mt-0 lg:w-[32rem] lg:self-center"
        }
      >
        <div className="text-center">
          <div className="text-2xl font-semibold tracking-tight">
            Take advantage of the global chain
          </div>
          <div className="">...buy and sell in a global marketplace</div>
        </div>
        <div className="mt-2">
          {/* <SocialAuthSignin /> */}
          <SigninForm />
          <div className="w-full text-center mt-2">
            <div className="text-center">
              <Link href={AuthPage.Signup}>
                Not a member?{" "}
                <span className="text-sky-600 font-semibold">Signup</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SigninPage;
