import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signOutFetching } from "features/Auth/store/reducers";

import { links } from "./constants";
import NavigationItem from "./components/NavigationItem";

const Navigation: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthState = () => {
    dispatch(
      signOutFetching({
        callback: () => {
          navigate("/");
        },
      })
    );
  };

  return (
    <nav className="navigation">
      <ul>
        {links.map(item => (
          <NavigationItem key={item.link} link={item.link} title={item.title} />
        ))}
        <li className="navigation-item">
          <a className="navigation-item__link" onClick={handleAuthState}>
            <div className="navigation-item__icon-wrapper">
              <img className="navigation-item__icon" src={require("../../app/images/monday.png")} />
            </div>
            <span className="navigation-item__title">Выйти</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
