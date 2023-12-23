import React from "react";
import AuthLayout from ".";
import Image from "next/image";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-screen overflow-auto min-h-screen h-auto bg-sky-600">
      <div className="absolute inset-0 lg:h-screen h-[150%] w-screen">
        <Image
          src="/images/background/global_exports.jpg"
          alt="background image"
          fill
          className="hidden lg:block w-full"
        />
        <div className="relative z-10 h-full">
          <AuthLayout>{children}</AuthLayout>
        </div>
      </div>
    </div>
  );
};

export default Layout;
