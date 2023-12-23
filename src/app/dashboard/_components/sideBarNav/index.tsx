"use client";

import {
  DashBoardSideMenus,
  DashboardSideMenuEnums,
} from "@/constants/dashboard/sideMenus";
import { usePathname } from "next/navigation";
import MenuItem from "./menuItem";
import { memo, useEffect, useState } from "react";
import ShopBrand from "./shopBrand";

const DashboardSidebarNav: React.FC<{
  setCurrentDashboardPage: React.Dispatch<
    React.SetStateAction<DashboardSideMenuEnums | undefined>
  >;
}> = ({ setCurrentDashboardPage }) => {
  const pathname = usePathname();

  const [host, setHost] = useState<string>();
  useEffect(() => {
    window && setHost(window.location.host);
  }, []);

  return (
    <div className="">
      <nav className={"flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"}>
        <div className="h-[10rem] rounded-t-[10px]">
          <div className="x-auto bg-sky-600 h-full rounded-t-[10px]">
            <ShopBrand />
          </div>
        </div>
        {DashBoardSideMenus.map((menu) => (
          <MenuItem
            pathname={pathname}
            host={host ? host : ""}
            menu={menu}
            key={menu.href}
            setCurrentDashboardPage={setCurrentDashboardPage}
          />
        ))}
      </nav>
    </div>
  );
};

export default memo(DashboardSidebarNav);
