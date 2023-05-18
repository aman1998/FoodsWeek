import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SingleDayPage from "./pages/SingleDayPage";
import NotFound from "./pages/404";

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<SingleDayPage />} />
        <Route path="/404" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
