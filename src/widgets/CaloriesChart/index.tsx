import { FC } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Bar,
  YAxis,
  ReferenceLine,
} from "recharts";

import { userProductsInWeekSelector, userTotalExpenditureAverageCaloriesInDaySelector } from "features/User";

const CaloriesChart: FC = () => {
  const userProductsInWeek = useSelector(userProductsInWeekSelector);
  const totalCaloriesConsumedInDay = useSelector(userTotalExpenditureAverageCaloriesInDaySelector);

  return (
    <aside className="calories-chart">
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={userProductsInWeek} margin={{ top: 10, right: 10, bottom: -10, left: -15 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" style={{ fontSize: 10 }} interval={0} />
          <YAxis domain={[totalCaloriesConsumedInDay, "auto"]} style={{ fontSize: 14 }} />
          <Tooltip />
          <ReferenceLine y={totalCaloriesConsumedInDay} stroke="#000" />
          <Bar dataKey="nutrients.totalCalories" fill="#1cb0f6">
            {userProductsInWeek.map(item => (
              <Cell
                key={item.day}
                fill={item.nutrients.totalCalories >= totalCaloriesConsumedInDay ? "#137333" : "#a50e0e"}
              />
            ))}
          </Bar>
          {/* <Line dataKey="nutrients.totalCalories" fill="#1cb0f6">
            {userProductsInWeek.map(item => (
              <Cell
                key={item.day}
                fill={item.nutrients.totalCalories >= totalCaloriesConsumedInDay ? "#137333" : "#a50e0e"}
              />
            ))}
          </Line> */}
        </BarChart>
      </ResponsiveContainer>
    </aside>
  );
};

export default CaloriesChart;
