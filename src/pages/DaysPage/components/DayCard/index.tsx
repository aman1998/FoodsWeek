import cn from "classnames";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { currentDayOfWeek } from "shared/utils/date";

import { IDayCardProps } from "./types";

const DayCard: FC<IDayCardProps> = ({ title, link, totalCalories, totalFat, totalProtein, totalCarbohydrate }) => (
  <NavLink to={link} className="day-card" end>
    <h2
      className={cn("day-card__title", {
        "day-card__title--active": currentDayOfWeek.toLowerCase() === title.toLowerCase(),
      })}
    >
      {title}
    </h2>
    <div className="day-card__info">
      <img className="day-card__icon" src={require("app/images/calories.png")} alt="totalCalories" />
      <p className="day-card__count">{totalCalories} kcal</p>
    </div>
    <div className="day-card__info">
      <img className="day-card__icon" src={require("app/images/protein.png")} alt="totalProtein" />
      <p className="day-card__count">{totalProtein}g protein</p>
    </div>
    <div className="day-card__info">
      <img className="day-card__icon" src={require("app/images/fat.png")} alt="totalFat" />
      <p className="day-card__count">{totalFat}g fat</p>
    </div>
    <div className="day-card__info">
      <img className="day-card__icon" src={require("app/images/carbohydrate.png")} alt="totalCarbohydrate" />
      <p className="day-card__count">{totalCarbohydrate}g carbohydrate</p>
    </div>
  </NavLink>
);

export default DayCard;
