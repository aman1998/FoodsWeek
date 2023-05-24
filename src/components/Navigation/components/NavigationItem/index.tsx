import { FC } from "react";
import { NavLink } from "react-router-dom";

import { TNavigationItem } from "./types";

const NavigationItem: FC<TNavigationItem> = ({ link, title }) => (
  <li key={link} className="navigation-item">
    <NavLink
      to={link}
      className={({ isActive }) => `navigation-item__link ${isActive ? "navigation-item__link--active" : ""}`}
      end
    >
      <div className="navigation-item__icon-wrapper">
        <img className="navigation-item__icon" src={require("../../../../common/images/monday.png")} />
      </div>
      <span className="navigation-item__title">{title}</span>
    </NavLink>
  </li>
);

export default NavigationItem;
