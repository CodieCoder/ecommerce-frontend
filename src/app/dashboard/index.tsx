"use client";

import DashboardSidebarNav from "./_components/sideBarNav";
import DashboardTopBar from "./_components/topBarMenu";
import { DashboardSideMenuEnums } from "@/constants/dashboard/sideMenus";
import React from "react";

const DashboardPages: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentDashboardPage, setCurrentDashboardPage] =
    React.useState<DashboardSideMenuEnums>();

  return (
    <div className="bg-gray-50 w-full h-screen min-w-[80rem]">
      <div className="w-full pt-[0.5rem] pr-[5rem] bg-white grid grid-cols-6 gap-4 h-[5%] min-h-[3rem] overflow-hidden">
        <div className="col-span-1">
          <div className="text-center mx-auto font-bold text-xl text-sky-600">
            App-creator
          </div>
        </div>
        <div className="col-span-5 bg-white">
          <DashboardTopBar currentDashboardPage={currentDashboardPage} />
        </div>
      </div>
      <div className="grid grid-cols-6 h-[94%] bg-gray-100 px-[1.5rem] py-[1rem]">
        <div className="col-span-1">
          <aside className="flex-shrink-0 bg-white rounded-[10px] mx-auto h-[97%]">
            {/* <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block"> */}
            <DashboardSidebarNav
              setCurrentDashboardPage={setCurrentDashboardPage}
            />
          </aside>
        </div>
        <div className="col-span-5">
          <div className="w-[90%] mx-auto border">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPages;
