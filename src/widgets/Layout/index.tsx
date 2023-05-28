import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import CaloriesChart from "widgets/CaloriesChart";

import { AuthForm } from "features/Auth";

import UserStats from "../UserStats";
import Header from "../Header";
import Sidebar from "../Sidebar";

import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ showAsides = true }) => (
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
        {showAsides && (
          <div className="main-asides">
            <UserStats />
            <CaloriesChart />
          </div>
        )}
      </div>
    </main>
    <AuthForm />
  </>
);

export default Layout;
