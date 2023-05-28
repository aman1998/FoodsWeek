import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  userInfoFetchingSelector,
  userInfoSelector,
  userTotalGetCaloriesInWeekSelector,
  userTotalGetAverageCaloriesInWeekSelector,
  userTotalExpenditureCaloriesInWeekSelector,
  userTotalExpenditureAverageCaloriesInDaySelector,
} from "features/User/store/selectors";

import Button from "shared/UI/Button";

const UserStats: FC = () => {
  const user = useSelector(userInfoSelector);
  const userInfoLoading = useSelector(userInfoFetchingSelector);
  const totalCaloriesBurnedInWeek = useSelector(userTotalGetCaloriesInWeekSelector);
  const totalCaloriesBurnedInDay = useSelector(userTotalGetAverageCaloriesInWeekSelector);
  const totalCaloriesConsumedInWeek = useSelector(userTotalExpenditureCaloriesInWeekSelector);
  const totalCaloriesConsumedInDay = useSelector(userTotalExpenditureAverageCaloriesInDaySelector);

  const navigate = useNavigate();

  const navigateToProfile = (): void => {
    navigate("/profile");
  };

  if (userInfoLoading) {
    return <aside className="user-stats">Loading...</aside>;
  }

  return (
    <aside className="user-stats">
      <div className="user-stats__header">
        <h2 className="user-stats__title">{user?.name ? `${user.name}` : "User"}</h2>
        <Button onClick={navigateToProfile} variant="text" className="user-stats__btn">
          Change info
        </Button>
      </div>
      <div>
        <div className="user-stats__info">
          <div className="user-stats__item">
            <b>Height:</b> <span>{user?.height?.value ? `${user.height.value} ${user.height?.type}` : "not"}</span>
          </div>
          <div className="user-stats__item">
            <b>Weight:</b> <span>{user?.weight?.value ? `${user.weight.value} ${user.weight?.type}` : "not"}</span>
          </div>
          <div className="user-stats__item">
            {/* <img className="user-stats__icon" src={require("app/images/calories.png")} alt="totalCalories" /> */}
            <b>Burned:</b>
            <span>
              {totalCaloriesBurnedInWeek} kcal (per day {totalCaloriesBurnedInDay})
            </span>
          </div>
          <div className="user-stats__item">
            {/* <img className="user-stats__icon" src={require("app/images/calories.png")} alt="totalCalories" /> */}
            <b>Consumed:</b>
            <span>
              {totalCaloriesConsumedInWeek} kcal (per day {totalCaloriesConsumedInDay})
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default UserStats;
