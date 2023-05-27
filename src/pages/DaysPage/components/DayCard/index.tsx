import { FC } from "react";
import { NavLink } from "react-router-dom";

import { TDayCardProps } from "./types";

const DayCard: FC<TDayCardProps> = ({ title, link, energy }) => (
  <NavLink to={link} className="day-card" end>
    <p className="day-card__title">{title}</p>
    <div>energy{energy}</div>
  </NavLink>
);

export default DayCard;
