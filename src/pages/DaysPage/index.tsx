import { FC } from "react";
import { useSelector } from "react-redux";

import { userInfoFetchingSelector, userProductsInWeekSelector } from "features/User";

import List from "entities/List";

import DaysSkeleton from "./components/Skeleton";
import DaysList from "./components/DaysList";

const DaysPage: FC = () => {
  const userProductsInWeek = useSelector(userProductsInWeekSelector);
  const loading = useSelector(userInfoFetchingSelector);

  return <List component={<DaysList />} data={userProductsInWeek} preloader={<DaysSkeleton />} loading={loading} />;
};

export default DaysPage;
