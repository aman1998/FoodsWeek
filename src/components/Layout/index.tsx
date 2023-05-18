import { FC } from "react";
import { Outlet } from "react-router-dom";

import UserStats from "../UserStats";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout: FC = () => (
  <>
    <Header />
    <Sidebar />
    <main className="main">
      <div className="main-wrapper">
        <div style={{ width: "100%" }}>
          <Outlet />
        </div>
        <UserStats />
      </div>
    </main>
  </>
);

export default Layout;
