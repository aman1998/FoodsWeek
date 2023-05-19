import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { isAuthSelector, isAuthCheckDoneSelector } from "../../containers/AuthContainer/store/selectors";
import { signOutFetching, changeAuthModalIsOpen } from "../../containers/AuthContainer/store/reducers";

import { links } from "./constants";

const Navigation: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const isAuthCheckDone = useSelector(isAuthCheckDoneSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthState = () => {
    if (isAuth) {
      dispatch(
        signOutFetching({
          callback: () => {
            navigate("/");
          },
        })
      );
    } else {
      dispatch(changeAuthModalIsOpen(true));
    }
  };

  return (
    <nav className="navigation">
      <ul>
        {links.map(item => (
          <li key={item.link} className="navigation-item">
            <NavLink
              to={item.link}
              className={({ isActive }) => `navigation-item__link ${isActive ? "navigation-item__link--active" : ""}`}
            >
              <div className="navigation-item__icon-wrapper">
                <img className="navigation-item__icon" src={require("../../common/images/monday.png")} />
                {/* <DaysIcon /> */}
              </div>
              <span className="navigation-item__title">{item.title}</span>
            </NavLink>
          </li>
        ))}
        {isAuthCheckDone && (
          <li className="navigation-item">
            <a className="navigation-item__link" onClick={handleAuthState}>
              <div className="navigation-item__icon-wrapper">
                <img className="navigation-item__icon" src={require("../../common/images/monday.png")} />
              </div>
              <span className="navigation-item__title">{isAuth ? "Выйти" : "Войти"}</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
