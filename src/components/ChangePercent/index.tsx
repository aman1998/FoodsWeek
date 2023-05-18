import cn from "classnames";
import { FC } from "react";

import { IChangePercentProps } from "./types";

const ChangePercent: FC<IChangePercentProps> = ({ percent }) => (
  <div
    className={cn("change-percent", {
      "change-percent--plus": percent >= 0,
      "change-percent--minus": percent < 0,
    })}
  >
    {percent > 0 ? "+" : ""}
    {percent}%
  </div>
);

export default ChangePercent;
