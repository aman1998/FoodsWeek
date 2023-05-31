// import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import { FC } from "react";

const UserStatsSkeleton: FC = () => (
  <div className="user-stats-skeleton">
    <Skeleton style={{ marginBottom: 40 }} />
    <Skeleton style={{ width: 150 }} />
    <Skeleton style={{ width: 150 }} />
    <Skeleton style={{ width: 150 }} />
  </div>
);

export default UserStatsSkeleton;
