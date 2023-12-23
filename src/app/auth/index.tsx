import React from "react";
import Leftside from "./components/left";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-sky-600 lg:bg-opacity-80 h-full w-full">
      <div className="w-full h-full lg:grid lg:grid-cols-5 lg:gap-4">
        <div className="hidden lg:block lg:col-span-3">
          <Leftside />
        </div>
        <div className="lg:col-span-2">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
