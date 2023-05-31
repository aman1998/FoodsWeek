import { FC } from "react";
import Skeleton from "@mui/material/Skeleton";

const DaysSkeleton: FC = () => (
  <div className="days-skeleton-wrapper">
    {Array.from({ length: 7 }, (_, index) => (
      <Skeleton key={index} sx={{ height: 180 }} animation="wave" variant="rectangular" className="days-skeleton" />
    ))}
  </div>
);

export default DaysSkeleton;
