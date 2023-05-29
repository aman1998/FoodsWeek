import { FC } from "react";
import { Link } from "react-scroll";

import { ELinks } from "pages/HomePage/types";

const HomeNavigation: FC = () => (
  <nav className="home-navigation">
    <ul>
      <li>
        <Link to={ELinks.about} spy={true} smooth={true} offset={0} duration={1000} className="navigation__link">
          About
        </Link>
      </li>
      <li>
        <Link
          to={ELinks.advantages}
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}
          className="home-navigation__link"
        >
          Advantages
        </Link>
      </li>
      <li>
        <Link
          to={ELinks.demonstration}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="navigation__link"
        >
          Demonstration
        </Link>
      </li>
    </ul>
  </nav>
);

export default HomeNavigation;
