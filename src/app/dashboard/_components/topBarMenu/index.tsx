import { DashboardSideMenuEnums } from "@/constants/dashboard/sideMenus";
import TopBarNotification from "./notifications";
import { UserNav } from "./user-nav";

const DashboardTopBar: React.FC<{
  currentDashboardPage: DashboardSideMenuEnums | undefined;
}> = ({ currentDashboardPage }) => {
  return (
    <div className="m-auto">
      <div className="flex items-center">
        {currentDashboardPage}
        <div className="ml-auto flex items-center space-x-4">
          <TopBarNotification />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
