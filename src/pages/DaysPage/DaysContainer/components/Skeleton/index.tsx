import { FC } from "react";
import Skeleton from "@mui/material/Skeleton";

const DaysSkeleton: FC = () => (
  <div className="stocks-skeleton-wrapper">
    {Array.from({ length: 10 }, (_, index) => (
      <div key={index} className="stocks-skeleton">
        <Skeleton animation="pulse" variant="circular" width={30} height={30} />
        <Skeleton animation="pulse" height={30} width={40} className="stocks-skeleton__item--two" />
        <Skeleton animation="pulse" height={40} width={50} className="stocks-skeleton__item--three" />
      </div>
    ))}
  </div>
);

export default DaysSkeleton;
