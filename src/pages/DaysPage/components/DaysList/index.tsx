import { FC } from "react";
import { useSelector } from "react-redux";

import { userProductsInWeekSelector } from "features/User";

import DayCard from "../DayCard";

const DaysList: FC = () => {
  const userProductsInWeek = useSelector(userProductsInWeekSelector);

  return (
    <section className="days-wrapper">
      <div className="days">
        {userProductsInWeek.map(item => (
          <DayCard
            totalCalories={item.nutrients.totalCalories}
            totalCarbohydrate={item.nutrients.totalCarbohydrate}
            totalFat={item.nutrients.totalFat}
            totalProtein={item.nutrients.totalProtein}
            key={item.day}
            title={item.day.toUpperCase()}
            link={`/days/${item.day.toLowerCase()}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DaysList;
