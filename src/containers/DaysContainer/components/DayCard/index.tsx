import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeAuthModalIsOpen } from "../../../AuthContainer/store/reducers";
import { isAuthSelector } from "../../../AuthContainer/store/selectors";

import { TDayCardProps } from "./types";

const DayCard: FC<TDayCardProps> = ({ title, link }) => {
  const isAuth = useSelector(isAuthSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthState = () => {
    if (isAuth) {
      navigate(link);
    } else {
      dispatch(changeAuthModalIsOpen(true));
    }
  };

  return (
    <a onClick={handleAuthState} className="day-card">
      <p className="day-card__title">{title}</p>
    </a>
  );
};

export default DayCard;
