import DashboardPages from ".";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <DashboardPages>{children}</DashboardPages>;
};

export default Layout;
