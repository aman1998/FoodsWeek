import { FC } from "react";

const HomeAdvantages: FC = () => (
  <section className="home-advantages">
    <h2 className="home-advantages__title">Why Choose Us?</h2>
    <h3 className="home-advantages__subtitle">
      Our website provides a simple and convenient tool for calculating calories, helping you plan a healthy and
      balanced diet
    </h3>
    <div className="home-advantages__list">
      <div className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#F1F7FF" }}>
          1
        </div>
        <div className="home-advantages-card__title">Accuracy and Reliability</div>
        <div className="home-advantages-card__text">
          Our calorie calculation algorithm is based on the latest scientific research and recognized standards,
          ensuring the utmost accuracy and reliability of the results
        </div>
      </div>
      <div className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#FFF7E3" }}>
          2
        </div>
        <div className="home-advantages-card__title">Personalized Approach</div>
        <div className="home-advantages-card__text">
          We take into account your unique characteristics, such as gender, age, height, weight, and activity level, to
          provide personalized calorie recommendations tailored to your needs.
        </div>
      </div>
      <div className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#FFF2F8" }}>
          3
        </div>
        <div className="home-advantages-card__title">Ease of Use</div>
        <div className="home-advantages-card__text">
          Our user-friendly interface is designed with your comfort and clarity in mind. With just a few simple steps,
          you can obtain a detailed calorie breakdown for each day
        </div>
      </div>
      <div className="home-advantages-card">
        <div className="home-advantages-card__icon-wrapper" style={{ background: "#DEFFEE" }}>
          4
        </div>
        <div className="home-advantages-card__title">Progress Tracking</div>
        <div className="home-advantages-card__text">
          We provide tools to conveniently track your progress and achievements. You can monitor your results and make
          necessary adjustments to your diet along the way
        </div>
      </div>
    </div>
  </section>
);

export default HomeAdvantages;
