import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import UserStats from "../UserStats";
import Header from "../Header";
import Sidebar from "../Sidebar";

import AuthForm from "../../containers/AuthContainer";
import { changeAuthModalIsOpen } from "../../containers/AuthContainer/store/reducers";

const Layout: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(changeAuthModalIsOpen(true));
        }}
      >
        hello
      </button>
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
      <AuthForm />
    </>
  );
};

export default Layout;
