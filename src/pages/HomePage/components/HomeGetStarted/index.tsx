import { FC } from "react";
import { useDispatch } from "react-redux";

import { changeAuthModalIsOpen } from "features/Auth/store/reducers";

import Button from "shared/UI/Button";

const HomeGetStarted: FC = () => {
  const dispatch = useDispatch();
  return (
    <article className="home-getStarted">
      <h2 className="home-getStarted__title">Are you interested? Then start right now!</h2>
      <Button
        className="home-getStarted__button"
        onClick={() => {
          dispatch(changeAuthModalIsOpen(true));
        }}
      >
        Get Started
      </Button>
    </article>
  );
};

export default HomeGetStarted;
