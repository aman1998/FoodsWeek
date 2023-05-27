import { FC } from "react";
import { NavLink } from "react-router-dom";

import { TDayCardProps } from "./types";

const DayCard: FC<TDayCardProps> = ({ title, link, calories }) => (
  <NavLink to={link} className="day-card" end>
    <p className="day-card__title">{title}</p>
    <div>calories{calories}</div>
  </NavLink>
);

export default DayCard;
