import { FC, useState } from "react";

import Hamburger from "shared/components/Hamburger";
import Logo from "shared/UI/Logo";

import HomeDrawer from "../HomeDrawer";

const HomeHeaderMobile: FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  return (
    <header className="home-header-mobile-wrapper">
      <div className="home-header-mobile container">
        <Logo link="/" />
        <Hamburger isOpen={isOpenBurger} setIsOpen={setIsOpenBurger} />
      </div>
      <HomeDrawer isOpen={isOpenBurger} setIsOpen={setIsOpenBurger} />
    </header>
  );
};

export default HomeHeaderMobile;
