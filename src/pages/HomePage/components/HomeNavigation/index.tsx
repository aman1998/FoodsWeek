import { FC } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { ELinks } from "pages/HomePage/types";

const HomeNavigation: FC = () => (
  <nav className="home-navigation">
    <ul className="home-navigation__list">
      <li className="home-navigation__item">
        <a
          onClick={() => {
            scroll.scrollToTop();
          }}
          className="home-navigation__link"
        >
          About
        </a>
      </li>
      <li className="home-navigation__item">
        <Link
          to={ELinks.advantages}
          offset={-70} // header height + header margin-bottom
          spy={true}
          smooth={true}
          duration={1000}
          className="home-navigation__link"
        >
          Advantages
        </Link>
      </li>
      <li className="home-navigation__item">
        <Link
          to={ELinks.demonstration}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="home-navigation__link"
        >
          Demonstration
        </Link>
      </li>
    </ul>
  </nav>
);

export default HomeNavigation;
