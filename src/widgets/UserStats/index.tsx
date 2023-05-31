import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  userInfoFetchingSelector,
  userInfoSelector,
  userTotalConsumedCaloriesInWeekSelector,
  userTotalConsumedAverageCaloriesInDaySelector,
  userTotalBurnedCaloriesInWeekSelector,
  userTotalBurnedAverageCaloriesInDaySelector,
} from "features/User/store/selectors";

import Button from "shared/UI/Button";

import UserStatsSkeleton from "./components/Skeleton";

const UserStats: FC = () => {
  const user = useSelector(userInfoSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);
  const totalCaloriesConsumedInWeek = useSelector(userTotalConsumedCaloriesInWeekSelector);
  const totalCaloriesConsumedInDay = useSelector(userTotalConsumedAverageCaloriesInDaySelector);
  const totalCaloriesBurnedInWeek = useSelector(userTotalBurnedCaloriesInWeekSelector);
  const totalCaloriesBurnedInDay = useSelector(userTotalBurnedAverageCaloriesInDaySelector);

  const navigate = useNavigate();

  const navigateToProfile = (): void => {
    navigate("/profile");
  };

  if (userInfoLoading) {
    return <UserStatsSkeleton />;
  }

  return (
    <aside className="user-stats">
      <div className="user-stats__header">
        <h2 className="user-stats__title">{user?.name ? `${user.name}` : "User"}</h2>
        {window.location.pathname !== "/profile" && (
          <Button onClick={navigateToProfile} variant="text" className="user-stats__btn">
            Change info
          </Button>
        )}
      </div>
      <div>
        <div className="user-stats__info">
          <div className="user-stats__item">
            <b>Height:</b> <span>{user?.height?.value ? `${user.height.value} ${user.height?.type}` : "not"}</span>
          </div>
          <div className="user-stats__item">
            <b>Weight:</b> <span>{user?.weight?.value ? `${user.weight.value} ${user.weight?.type}` : "not"}</span>
          </div>
          <div className="user-stats__item user-stats__item--kcal">
            {/* <img className="user-stats__icon" src={require("app/images/calories.png")} alt="totalCalories" /> */}
            <b>Burned:</b>
            <span> {totalCaloriesBurnedInWeek}</span> kcal (per day {<span>{totalCaloriesBurnedInDay}</span>})
          </div>
          <div className="user-stats__item user-stats__item--kcal">
            {/* <img className="user-stats__icon" src={require("app/images/calories.png")} alt="totalCalories" /> */}
            <b>Consumed:</b>
            <span>{totalCaloriesConsumedInWeek}</span> kcal (per day {<span>{totalCaloriesConsumedInDay}</span>})
          </div>
        </div>
      </div>
    </aside>
  );
};
export default UserStats;
