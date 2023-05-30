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

const HomeDemonstration: FC = () => (
  <section className="home-demonstration">
    <h2 className="home-demonstration__title">Find your ideal meal plan for your goals</h2>
    <h3 className="home-demonstration__subtitle">See what FoodsWeek makes possible</h3>
    <div className="home-demonstration__list">
      <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className="home-demonstration-item">
        <motion.img
          custom={1}
          variants={animation}
          src="https://evernote.com/c/assets/homepage-repackaging/feature_task@2x__ru.png?d690cfa1e3d7e534"
          alt="screen"
          className="home-demonstration__image"
        />
        <div className="home-demonstration-item__content">
          <h3 className="home-demonstration-item__title">Great Digital Product Agency since 2016</h3>
          <p className="home-demonstration-item__text">
            Our Business Plan is a written document describing a company's core business activites, Objectives, and how
            it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea
            accordingly their budgets and according thir reuirements.
          </p>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="home-demonstration-item home-demonstration-item--reverse"
      >
        <motion.img
          custom={2}
          variants={animation}
          src="https://evernote.com/c/assets/homepage-repackaging/feature_task@2x__ru.png?d690cfa1e3d7e534"
          alt="screen"
          className="home-demonstration__image"
        />
        <div className="home-demonstration-item__content">
          <h3 className="home-demonstration-item__title">Great Digital Product Agency since 2016</h3>
          <p className="home-demonstration-item__text">
            Our Business Plan is a written document describing a company's core business activites, Objectives, and how
            it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea
            accordingly their budgets and according thir reuirements.
          </p>
        </div>
      </motion.div>
      <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className="home-demonstration-item">
        <motion.img
          custom={3}
          variants={animation}
          src="https://evernote.com/c/assets/homepage-repackaging/feature_task@2x__ru.png?d690cfa1e3d7e534"
          alt="screen"
          className="home-demonstration__image"
        />
        <div className="home-demonstration-item__content">
          <h3 className="home-demonstration-item__title">Great Digital Product Agency since 2016</h3>
          <p className="home-demonstration-item__text">
            Our Business Plan is a written document describing a company's core business activites, Objectives, and how
            it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea
            accordingly their budgets and according thir reuirements.
          </p>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="home-demonstration-item home-demonstration-item--reverse"
      >
        <motion.img
          custom={4}
          variants={animation}
          src="https://evernote.com/c/assets/homepage-repackaging/feature_task@2x__ru.png?d690cfa1e3d7e534"
          alt="screen"
          className="home-demonstration__image"
        />
        <div className="home-demonstration-item__content">
          <h3 className="home-demonstration-item__title">Great Digital Product Agency since 2016</h3>
          <p className="home-demonstration-item__text">
            Our Business Plan is a written document describing a company's core business activites, Objectives, and how
            it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea
            accordingly their budgets and according thir reuirements.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeDemonstration;
