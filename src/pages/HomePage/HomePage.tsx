import { FC } from "react";

import { AuthForm } from "features/Auth";

import HomeHeader from "./components/HomeHeader";
import HomeHeaderContent from "./components/HomeHeaderContent";
import HomeDemonstration from "./components/HomeDemonstration";

const HomePage: FC = () => (
  <div className="home">
    <HomeHeader />
    <div className="container">
      <HomeHeaderContent />
      <HomeDemonstration />
    </div>
    <AuthForm />
  </div>
);

export default HomePage;
