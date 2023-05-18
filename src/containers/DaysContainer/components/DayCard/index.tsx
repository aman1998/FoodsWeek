import { FC } from "react";
import { Link } from "react-router-dom";

import { TDayCardProps } from "./types";

const DayCard: FC<TDayCardProps> = ({ logoUrl, title, link }) => (
  <Link to={`/${link}`} className="day-card">
    <img src={logoUrl} alt={`${title} icon`} className="day-card__img" />
    <p className="day-card__title">{title}</p>
  </Link>
);

export default DayCard;
