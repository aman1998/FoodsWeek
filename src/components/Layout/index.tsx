import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout: FC = () => (
  <>
    <Header />
    <Sidebar />
    <main className="main">
      <Outlet />
    </main>
  </>
);

export default Layout;
