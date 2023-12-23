import { DashboardSideMenuEnums } from "@/constants/dashboard/sideMenus";

export interface ISideSubMenu {
  title: string;
  href: string;
}

export interface ISideMenu {
  title: DashboardSideMenuEnums;
  href: string;
  children: ISideSubMenu[];
}
