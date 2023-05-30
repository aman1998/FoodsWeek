import { FC } from "react";
import { Element } from "react-scroll";

import { AuthForm } from "features/Auth";

import HomeHeader from "./components/HomeHeader";
import HomeHeaderContent from "./components/HomeAbout";
import HomeDemonstration from "./components/HomeDemonstration";
import HomeAdvantages from "./components/HomeAdvantages";
import { ELinks } from "./types";
import HomeGetStarted from "./components/HomeGetStarted";
import HomeHeaderMobile from "./components/HomeHeaderMobile";

const HomePage: FC = () => (
  <div className="home">
    <HomeHeader />
    <HomeHeaderMobile />
    <div className="container">
      <HomeHeaderContent />
      <Element name={ELinks.advantages}>
        <HomeAdvantages />
      </Element>
      <Element name={ELinks.demonstration}>
        <HomeDemonstration />
      </Element>
      <HomeGetStarted />
    </div>
    <footer className="home-footer container">Copyright © 2023 AmanRossoneri98</footer>
    <AuthForm />
  </div>
);

export default HomePage;
