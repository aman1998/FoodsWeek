import { FC } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Typography } from "@mui/material";

const SingleDaySkeleton: FC = () => (
  <div className="day-skeleton">
    {Array.from({ length: 10 }, (_, index) => (
      <Typography variant="h3" key={index}>
        <Skeleton animation="pulse" />
      </Typography>
    ))}
  </div>
);

export default SingleDaySkeleton;
