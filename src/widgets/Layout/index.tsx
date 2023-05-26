import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import AuthForm from "containers/AuthContainer";

import UserStats from "../UserStats";
import Header from "../Header";
import Sidebar from "../Sidebar";

import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ showStats = true }) => (
  <>
    <Header />
    <Sidebar />
    <main className="main">
      <div className="main-wrapper">
        <div style={{ width: "100%" }}>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </div>
        {showStats && <UserStats />}
      </div>
    </main>
    <AuthForm />
  </>
);

export default Layout;
