import { FC } from "react";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const HomeAdvantages: FC = () => (
  <motion.section viewport={{ once: true }} initial="hidden" whileInView="visible" className="home-advantages">
    <h2 className="home-advantages__title">Why Choose Us?</h2>
    <h3 className="home-advantages__subtitle">
      Our website provides a simple and convenient tool for calculating calories, helping you plan a healthy and
      balanced diet
    </h3>
    <div className="home-advantages__list">
      <motion.div custom={1} variants={animation} className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#F1F7FF" }}>
          1
        </div>
        <div className="home-advantages-card__title">Accuracy and Reliability</div>
        <div className="home-advantages-card__text">
          Our calorie calculation algorithm is based on the latest scientific research and recognized standards,
          ensuring the utmost accuracy and reliability of the results
        </div>
      </motion.div>
      <motion.div custom={2} variants={animation} className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#FFF7E3" }}>
          2
        </div>
        <div className="home-advantages-card__title">Personalized Approach</div>
        <div className="home-advantages-card__text">
          We take into account your unique characteristics, such as gender, age, height, weight, and activity level, to
          provide personalized calorie recommendations tailored to your needs.
        </div>
      </motion.div>
      <motion.div custom={3} variants={animation} className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#FFF2F8" }}>
          3
        </div>
        <div className="home-advantages-card__title">Ease of Use</div>
        <div className="home-advantages-card__text">
          Our user-friendly interface is designed with your comfort and clarity in mind. With just a few simple steps,
          you can obtain a detailed calorie breakdown for each day
        </div>
      </motion.div>
      <motion.div custom={4} variants={animation} className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#DEFFEE" }}>
          4
        </div>
        <div className="home-advantages-card__title">Progress Tracking</div>
        <div className="home-advantages-card__text">
          We provide tools to conveniently track your progress and achievements. You can monitor your results and make
          necessary adjustments to your diet along the way
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default HomeAdvantages;
