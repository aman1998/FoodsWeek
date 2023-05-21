import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isAuthSelector, isAuthCheckDoneSelector } from "../../containers/AuthContainer/store/selectors";
import { signOutFetching, changeAuthModalIsOpen } from "../../containers/AuthContainer/store/reducers";

import { links } from "./constants";
import NavigationItem from "./components/NavigationItem";

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

  if (!isAuthCheckDone) return <>Loading...</>;

  return (
    <nav className="navigation">
      <ul>
        {links.map(item => (
          <>
            {item.isPrivate && isAuth && <NavigationItem link={item.link} title={item.title} />}
            {!item.isPrivate && <NavigationItem link={item.link} title={item.title} />}
          </>
        ))}
        <li className="navigation-item">
          <a className="navigation-item__link" onClick={handleAuthState}>
            <div className="navigation-item__icon-wrapper">
              <img className="navigation-item__icon" src={require("../../common/images/monday.png")} />
            </div>
            <span className="navigation-item__title">{isAuth ? "Выйти" : "Войти"}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
