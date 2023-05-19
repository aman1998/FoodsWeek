import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authInfoFetching } from "./containers/AuthContainer/store/reducers";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
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
          <Route path="/404" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
