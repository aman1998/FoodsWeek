import { FC, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authInfoFetching } from "./containers/AuthContainer/store/reducers";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
const HomePage = lazy(() => import("./pages/HomePage"));
const DaysPage = lazy(() => import("./pages/DaysPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SingleDayPage = lazy(() => import("./pages/SingleDayPage"));
const NotFound = lazy(() => import("./pages/404"));

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authInfoFetching());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route path="/info" element={<Layout />}>
            <Route index element={<DaysPage />} />
            <Route index path="/info/:id" element={<SingleDayPage />} />
            <Route index path="/info/profile" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
