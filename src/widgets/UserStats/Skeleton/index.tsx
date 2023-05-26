import Skeleton from "@mui/material/Skeleton";
import { FC } from "react";

const UserStatsSkeleton: FC = () => (
  <div className="user-stats-skeleton">
    <div className="user-stats-skeleton__item">
      <Skeleton animation="pulse" height={300} style={{ marginTop: -65 }} />
    </div>
  </div>
);

export default UserStatsSkeleton;
