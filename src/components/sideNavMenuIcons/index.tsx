import React from "react";
import { DashboardSideMenuEnums } from "@/constants/dashboard/sideMenus";
import {
  TfiStatsUp,
  TfiIdBadge,
  TfiShoppingCartFull,
  TfiReceipt,
  TfiLayout,
} from "react-icons/tfi";
import { PiUsersThin } from "react-icons/pi";

const SideNavMenuIcons: React.FC<{ icon: DashboardSideMenuEnums }> = ({
  icon,
}) => {
  const getIcon = (icon: DashboardSideMenuEnums) => {
    switch (icon) {
      case DashboardSideMenuEnums.Analytics:
        return <TfiStatsUp />;

      case DashboardSideMenuEnums.Cards:
        return <TfiIdBadge />;

      case DashboardSideMenuEnums.Products:
        return <TfiShoppingCartFull />;

      case DashboardSideMenuEnums.Sales:
        return <TfiReceipt />;

      case DashboardSideMenuEnums.Staffs:
        return <PiUsersThin />;
      case DashboardSideMenuEnums.Dashboard:
        return <TfiLayout />;
    }
  };
  return getIcon(icon);
};

export default SideNavMenuIcons;
