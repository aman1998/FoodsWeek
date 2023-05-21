import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeAuthModalIsOpen } from "../../containers/AuthContainer/store/reducers";
import { isAuthSelector, authInfoFetchingSelector } from "../../containers/AuthContainer/store/selectors";
import { userInfoFetchingSelector, userInfoSelector } from "../../containers/ProfileContainer/store/selectors";
import Button from "../../UI/Button";

const UserStats: FC = () => {
  const user = useSelector(userInfoSelector);
  const isAuth = useSelector(isAuthSelector);
  const authLoading = useSelector(authInfoFetchingSelector);
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

  if (authLoading || userInfoLoading) {
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
          <b>Height:</b> <span>{user?.height.value ? `${user.height.value} ${user.height.type}` : "not"}</span>
        </div>
        <div className="user-stats__item">
          <b>Weight:</b> <span>{user?.weight.value ? `${user.weight.value} ${user.weight.type}` : "not"}</span>
        </div>
      </div>
      <Button onClick={handleAuthState} variant="text" text="Change info" className="user-stats__btn" />
    </aside>
  );
};
export default UserStats;
