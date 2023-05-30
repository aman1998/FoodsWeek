import { FC } from "react";
import { Element } from "react-scroll";

import { AuthForm } from "features/Auth";

import HomeHeader from "./components/HomeHeader";
import HomeHeaderContent from "./components/HomeAbout";
import HomeDemonstration from "./components/HomeDemonstration";
import HomeAdvantages from "./components/HomeAdvantages";
import { ELinks } from "./types";

const HomePage: FC = () => (
  <div className="home">
    <HomeHeader />
    <div className="container">
      <HomeHeaderContent />
      <Element name={ELinks.advantages}>
        <HomeAdvantages />
      </Element>
      <Element name={ELinks.demonstration}>
        <HomeDemonstration />
      </Element>
    </div>
    <footer className="home-footer container">Copyright © 2023 AmanRossoneri98</footer>
    <AuthForm />
  </div>
);

export default HomePage;
