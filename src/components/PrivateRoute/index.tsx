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
    return <></>;
  }

  if (!loading && isAuthCheckDone && !isAuth) {
    return <Navigate to="/" />;
  }

  if (!loading && isAuthCheckDone && isAuth) {
    return <Outlet />;
  }

  return <></>;
};

export default PrivateRoute;
