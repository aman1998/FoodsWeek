// import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import { FC } from "react";

const CaloriesChartSkeleton: FC = () => (
  <div className="calories-chart-skeleton">
    <Skeleton variant="rectangular" width="100%" height={150} />
  </div>
);

export default CaloriesChartSkeleton;
