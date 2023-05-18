import { FC } from "react";
import cn from "classnames";

import { TDayStatsProps } from "./types";

const DayStats: FC<TDayStatsProps> = ({ mostExpensive, mostСheapest, smallestGain, biggestGain }) => {
  const items = [
    {
      id: 1,
      isPercent: false,
      color: "green",
      title: "Most expensive:",
      type: mostExpensive?.type,
      count: mostExpensive?.latestPrice,
    },
    {
      id: 2,
      isPercent: false,
      color: "red",
      title: "Most cheapest:",
      type: mostСheapest?.type,
      count: mostСheapest?.latestPrice,
    },
    {
      id: 3,
      isPercent: true,
      color: "green",
      title: "Biggest gain:",
      type: biggestGain?.type,
      count: biggestGain?.changePercent,
    },
    {
      id: 4,
      isPercent: true,
      color: "red",
      title: "Smallest gain:",
      type: smallestGain?.type,
      count: smallestGain?.changePercent,
    },
  ];

  return (
    <section className="stocks-stats">
      {items.map(item => (
        <div className="stocks-stats__item" key={item.id}>
          <div className="stocks-stats__title">{item.title} </div>
          <div>
            <span
              className={cn("stocks-stats__text", {
                "stocks-stats__text--red": item.color === "red",
                "stocks-stats__text--green": item.color === "green",
              })}
            >
              {item.count} {item.isPercent ? "%" : ""}
            </span>
            , {item.type}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DayStats;
