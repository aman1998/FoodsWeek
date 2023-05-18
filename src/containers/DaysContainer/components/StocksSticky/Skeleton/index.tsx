import Skeleton from "@mui/material/Skeleton";
import { FC } from "react";

const DaysStickySkeleton: FC = () => (
  <div className="day-sticky-skeleton">
    <div className="day-sticky-skeleton__item">
      <Skeleton animation="pulse" height={300} style={{ marginTop: -65 }} />
    </div>
  </div>
);

export default DaysStickySkeleton;
