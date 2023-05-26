import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userInfoFetchingSelector, userInfoSelector } from "pages/ProfilePage/ProfileContainer/store/selectors";

import Button from "shared/UI/Button";

const UserStats: FC = () => {
  const user = useSelector(userInfoSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);

  const navigate = useNavigate();

  const navigateToProfile = (): void => {
    navigate("/info/profile");
  };

  if (userInfoLoading) {
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
      <Button onClick={navigateToProfile} variant="text" className="user-stats__btn">
        Change info
      </Button>
    </aside>
  );
};
export default UserStats;
