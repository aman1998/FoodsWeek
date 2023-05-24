import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeAuthModalIsOpen } from "../../containers/AuthContainer/store/reducers";
import {
  isAuthSelector,
  authInfoFetchingSelector,
  isAuthCheckDoneSelector,
} from "../../containers/AuthContainer/store/selectors";
import { userInfoFetchingSelector, userInfoSelector } from "../../containers/ProfileContainer/store/selectors";
import Button from "../../UI/Button";

const UserStats: FC = () => {
  const user = useSelector(userInfoSelector);
  const isAuth = useSelector(isAuthSelector);
  const authLoading = useSelector(authInfoFetchingSelector);
  const isAuthCheck = useSelector(isAuthCheckDoneSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthState = (): void => {
    if (isAuth) {
      navigate("/profile");
    } else {
      dispatch(changeAuthModalIsOpen(true));
    }
  };

  if (authLoading || userInfoLoading || !isAuthCheck) {
    return <aside className="user-stats">Loading...</aside>;
  }

  return (
    <aside className="user-stats">
      <div className="user-stats__info">
        <div className="user-stats__item">
          <b>Name:</b> <span>{user?.name ? `${user.name}` : "not"}</span>
        </div>
        <div className="user-stats__item">
          <b>Gender:</b> <span>{user?.gender ? `${user.gender}` : "not"}</span>
        </div>
        <div className="user-stats__item">
          <b>Height:</b> <span>{user?.height?.value ? `${user.height.value} ${user.height?.type}` : "not"}</span>
        </div>
        <div className="user-stats__item">
          <b>Weight:</b> <span>{user?.weight?.value ? `${user.weight.value} ${user.weight?.type}` : "not"}</span>
        </div>
      </div>
      <Button onClick={handleAuthState} variant="text" className="user-stats__btn">
        Change info
      </Button>
    </aside>
  );
};
export default UserStats;
