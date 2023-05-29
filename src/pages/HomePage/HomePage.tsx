import { FC } from "react";

import { AuthForm } from "features/Auth";

import HomeHeader from "./components/HomeHeader";
import HomeHeaderContent from "./components/HomeHeaderContent";
import HomeDemonstration from "./components/HomeDemonstration";
import HomeAdvantages from "./components/HomeAdvantages";

const HomePage: FC = () => (
  <div className="home">
    <HomeHeader />
    <div className="container">
      <HomeHeaderContent />
      <HomeAdvantages />
      <HomeDemonstration />
    </div>
    <footer className="home-footer container">Copyright © 2023 AmanRossoneri98</footer>
    <AuthForm />
  </div>
);

export default HomePage;
