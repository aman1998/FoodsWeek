import { FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authInfoFetching } from "./containers/AuthContainer/store/reducers";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SingleDayPage from "./pages/SingleDayPage";
import NotFound from "./pages/404";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authInfoFetching());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<PrivateRoute />}>
            <Route element={<SingleDayPage />} />
          </Route>
        </Route>
        <Route path="/" element={<Layout showStats={false} />}>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route element={<ProfilePage />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
