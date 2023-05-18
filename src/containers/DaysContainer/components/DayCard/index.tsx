import { FC } from "react";
import { Link } from "react-router-dom";

import ChangePercent from "../../../../components/ChangePercent";

import { TDayCardProps } from "./types";

const DayCard: FC<TDayCardProps> = ({ logoUrl, latestPrice, changePercent, type }) => (
  <Link to={`/${type}`} className="day-card">
    <img src={logoUrl} alt={`${type} icon`} className="day-card__img" />
    <p className="day-card__latestPrice">{latestPrice}$</p>
    <div className="day-card__changePercent">
      <ChangePercent percent={changePercent} />
    </div>
  </Link>
);

export default DayCard;
