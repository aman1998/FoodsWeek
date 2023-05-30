import { FC } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { changeAuthModalIsOpen } from "features/Auth/store/reducers";

import Button from "shared/UI/Button";

const animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const imgAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const HomeAbout: FC = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeAuthModalIsOpen(true));
  };

  return (
    <motion.section viewport={{ once: true }} initial="hidden" whileInView="visible" className="home-about">
      <div className="home-about__left">
        <motion.h1 custom={1} variants={animation} className="home-about__title">
          Manage Your Food and <br />
          Nutrition!
        </motion.h1>
        <motion.div custom={2} variants={animation} className="home-about__description">
          Do you want to improve your nutrition, track your calories, and achieve your weight loss or maintenance goals?
          Then you've come to the right place! Our website provides a free, simple, and convenient calorie calculator
          tool that will help you plan a healthy and balanced diet.{" "}
        </motion.div>
        <Button onClick={openModal} className="home-about__button">
          Get Started
        </Button>
      </div>
      <motion.img
        variants={imgAnimation}
        src="https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__ru.png?a3e901e4e88f1ef"
        className="home-about__image"
      />
    </motion.section>
  );
};

export default HomeAbout;
