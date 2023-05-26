import { FC } from "react";
import { NavLink } from "react-router-dom";

import { TDayCardProps } from "./types";

const DayCard: FC<TDayCardProps> = ({ title, link }) => (
  <NavLink to={link} className="day-card" end>
    <p className="day-card__title">{title}</p>
  </NavLink>
);

export default DayCard;
