import { TNullable } from "../../../../store/types";

import { IDayData } from "../../store/types";

enum EDayStatKeys {
  mostExpensive = "mostExpensive",
  mostСheapest = "mostСheapest",
  smallestGain = "smallestGain",
  biggestGain = "biggestGain",
}

export type TDayStatsProps = Record<EDayStatKeys, TNullable<IDayData>>;
