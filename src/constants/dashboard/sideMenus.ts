export enum DashboardSideMenuEnums {
  Dashboard = "Dashboard",
  Cards = "Trade Cards",
  Products = "Products",
  Sales = "Sales",
  Analytics = "Analytics  & Charts",
  Staffs = "Staff Management",
}

export const DashboardSubMenu = {
  Sales: [
    {
      title: "View sales",
      href: "sales",
    },
    {
      title: "Refund",
      href: "sales/refund",
    },
  ],
  Cards: [
    {
      title: "Create card",
      href: "cards/create",
    },
    {
      title: "View cards",
      href: "cards/view",
    },
    {
      title: "Share/Send cards",
      href: "cards/share",
    },
  ],
  Products: [
    {
      title: "Products",
      href: "products",
    },
    {
      title: "Categories",
      href: "categories",
    },
    {
      title: "Brands",
      href: "brands",
    },
  ],
};

export const DashBoardSideMenus = [
  {
    title: DashboardSideMenuEnums.Dashboard,
    href: "",
    children: [],
  },
  {
    title: DashboardSideMenuEnums.Cards,
    href: "cards",
    children: DashboardSubMenu.Cards,
  },
  {
    title: DashboardSideMenuEnums.Products,
    href: "products",
    children: DashboardSubMenu.Products,
  },
  {
    title: DashboardSideMenuEnums.Sales,
    href: "sales",
    children: DashboardSubMenu.Sales,
  },
  {
    title: DashboardSideMenuEnums.Analytics,
    href: "analytics",
    children: [],
  },
  {
    title: DashboardSideMenuEnums.Staffs,
    href: "staffs",
    children: [],
  },
];
