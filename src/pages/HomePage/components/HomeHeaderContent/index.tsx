import { FC } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { changeAuthModalIsOpen } from "features/Auth/store/reducers";

import Button from "shared/UI/Button";

const HomeHeaderContent: FC = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeAuthModalIsOpen(true));
  };

  return (
    <section className="home-header-content">
      <div className="home-header-content__left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-header-content__title"
        >
          Manage Your Food and <br />
          Nutrition!
        </motion.h1>
        <motion.div className="home-header-content__description">
          Do you want to improve your nutrition, track your calories, and achieve your weight loss or maintenance goals?
          Then you've come to the right place! Our website provides a free, simple, and convenient calorie calculator
          tool that will help you plan a healthy and balanced diet.{" "}
        </motion.div>
        <Button onClick={openModal} className="home-header-content__button">
          Get Started
        </Button>
      </div>
      <img
        src="https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__ru.png?a3e901e4e88f1ef"
        className="home-header-content__image"
      />
    </section>
  );
};

export default HomeHeaderContent;
