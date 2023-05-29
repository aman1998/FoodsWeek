import { FC } from "react";

import { AuthForm } from "features/Auth";

import HomeHeader from "./components/HomeHeader";
import HomeHeaderContent from "./components/HomeHeaderContent";

const HomePage: FC = () => (
  <div className="home">
    <HomeHeader />
    <div className="container">
      <HomeHeaderContent />
    </div>
    <AuthForm />
  </div>
);

export default HomePage;
