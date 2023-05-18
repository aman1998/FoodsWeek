import { FC } from "react";
import { useSelector } from "react-redux";

import { stocksFetchingSelector } from "../../store/selectors";

import DaysStickySkeleton from "./Skeleton";

const DaysSticky: FC = () => {
  const loading = useSelector(stocksFetchingSelector);

  if (loading) {
    return <DaysStickySkeleton />;
  }

  return <aside className="stocks-sticky">hello</aside>;
};

export default DaysSticky;
