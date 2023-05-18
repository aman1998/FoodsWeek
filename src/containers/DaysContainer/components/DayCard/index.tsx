import { FC } from "react";
import { Link } from "react-router-dom";

import { TDayCardProps } from "./types";

const DayCard: FC<TDayCardProps> = ({ title, link }) => (
  <Link to={`/${link}`} className="day-card">
    <p className="day-card__title">{title}</p>
  </Link>
);

export default DayCard;
