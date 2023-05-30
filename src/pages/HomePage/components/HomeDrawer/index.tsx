import { FC } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch } from "react-redux";

import { changeAuthModalIsOpen } from "features/Auth/store/reducers";

import Hamburger from "shared/components/Hamburger";
import Button from "shared/UI/Button";

import HomeNavigation from "../HomeNavigation";

import { IHomeDrawerProps } from "./types";

const HomeDrawer: FC<IHomeDrawerProps> = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const handleSignUpButton = () => {
    setIsOpen(false);
    dispatch(changeAuthModalIsOpen(true));
  };
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)} className="home-drawer">
      <div className="home-drawer__content">
        <HomeNavigation setIsOpenBurger={setIsOpen} />
        <div className="home-drawer__button-wrapper">
          <Button variant="outlined" className="home-drawer__button" onClick={handleSignUpButton}>
            Sign Up
          </Button>
        </div>
      </div>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </Drawer>
  );
};

export default HomeDrawer;
