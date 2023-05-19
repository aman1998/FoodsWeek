// PrivateRoute.js

import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  isAuthSelector,
  authInfoFetchingSelector,
  isAuthCheckDoneSelector,
} from "../../containers/AuthContainer/store/selectors";

const PrivateRoute: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const isAuthCheckDone = useSelector(isAuthCheckDoneSelector);
  const loading = useSelector(authInfoFetchingSelector);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && isAuthCheckDone && !isAuth) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
