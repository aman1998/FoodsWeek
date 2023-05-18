import { FC } from "react";
import { NavLink } from "react-router-dom";

import DaysIcon from "../icons/DaysIcon";

import { links } from "./constants";

const Navigation: FC = () => (
  <nav className="navigation">
    <ul>
      {links.map(item => (
        <li key={item.link} className="navigation-item">
          <NavLink
            to={item.link}
            className={({ isActive }) => `navigation-item__link ${isActive ? "navigation-item__link--active" : ""}`}
          >
            <div className="navigation-item__icon-wrapper">
              <DaysIcon />
            </div>
            <span className="navigation-item__title">{item.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
