import { FC } from "react";
import { useDispatch } from "react-redux";

import { changeAuthModalIsOpen } from "features/Auth/store/reducers";

import Button from "shared/UI/Button";
import Logo from "shared/UI/Logo";

const HomeHeader: FC = () => {
  const dispatch = useDispatch();
  return (
    <header className="home-header-wrapper">
      <div className="container">
        <div className="home-header">
          <Logo link="/" />
          <Button variant="outlined" onClick={() => dispatch(changeAuthModalIsOpen(true))}>
            Sign UP
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
