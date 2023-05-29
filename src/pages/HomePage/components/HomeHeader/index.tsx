import { FC } from "react";
import { useDispatch } from "react-redux";

import { changeAuthModalIsOpen } from "features/Auth/store/reducers";

import Button from "shared/UI/Button";
import Logo from "shared/UI/Logo";

import HomeNavigation from "../HomeNavigation";

const HomeHeader: FC = () => {
  const dispatch = useDispatch();
  return (
    <header className="home-header-wrapper">
      <div className="container">
        <div className="home-header">
          <div className="home-header__logo-wrapper">
            <Logo link="/" />
          </div>
          <HomeNavigation />
          <Button
            className="home-header__button"
            variant="outlined"
            onClick={() => dispatch(changeAuthModalIsOpen(true))}
          >
            Sign UP
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
