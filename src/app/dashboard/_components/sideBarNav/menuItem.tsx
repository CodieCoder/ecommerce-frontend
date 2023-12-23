import SideNavMenuIcons from "@/components/sideNavMenuIcons";
import { DashboardSideMenuEnums } from "@/constants/dashboard/sideMenus";
import { ISideMenu } from "@/types/dashboard/sideMenus";
import Link from "next/link";

interface IMenuItems {
  menu: ISideMenu;
  pathname: string;
  host: string;
  setCurrentDashboardPage: React.Dispatch<
    React.SetStateAction<DashboardSideMenuEnums | undefined>
  >;
}

const MenuItem: React.FC<IMenuItems> = ({
  menu,
  pathname,
  host,
  setCurrentDashboardPage,
}) => {
  return (
    <Link key={menu.href} href={`http://${host}/dashboard/${menu.href}`}>
      <div
        className={`mt-3 w-[100%] mx-auto text-center font-bold text-light hover:border-gray-600`}
        onClick={() => setCurrentDashboardPage(menu.title)}
      >
        <div
          className={`flex w-[70%] mx-auto p-3 ${
            pathname === "/dashboard/" + menu.href.toLowerCase() ||
            pathname + "/" === "/dashboard/" + menu.href.toLowerCase()
              ? "text-sky-600"
              : "hover:text-sky-600"
          }`}
        >
          <div className="w-[15%] text-right text-base font-bold">
            <SideNavMenuIcons icon={menu.title} />
          </div>
          <div className="w-[85%] ml-6 text-left">{menu.title}</div>
        </div>
      </div>
    </Link>
  );
};

// className={cn(
//           buttonVariants({ variant: "ghost" }),

//             ? "bg-muted hover:bg-muted"
//             : "mt-5 w-[100%] mx-auto py-3 text-center"
//         )}

export default MenuItem;
