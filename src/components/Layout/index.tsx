import { FC } from "react";
import { Outlet } from "react-router-dom";

import UserStats from "../UserStats";
import Header from "../Header";
import Sidebar from "../Sidebar";

import AuthForm from "../../containers/AuthContainer";

import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ showStats = true }) => (
  <>
    <Header />
    <Sidebar />
    <main className="main">
      <div className="main-wrapper">
        <div style={{ width: "100%" }}>
          <Outlet />
        </div>
        {showStats && <UserStats />}
      </div>
    </main>
    <AuthForm />
  </>
);

export default Layout;
