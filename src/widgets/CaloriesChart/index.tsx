import { FC } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

import { userProductsInWeekSelector, userTotalExpenditureAverageCaloriesInDaySelector } from "features/User";

const CaloriesChart: FC = () => {
  const userProductsInWeek = useSelector(userProductsInWeekSelector);
  const totalCaloriesConsumedInDay = useSelector(userTotalExpenditureAverageCaloriesInDaySelector);

  return (
    <aside className="calories-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userProductsInWeek}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" style={{ fontSize: 10 }} interval={0} />
          <Tooltip />
          <Line dataKey="nutrients.totalCalories" fill="#1cb0f6">
            {userProductsInWeek.map(item => (
              <Cell
                key={item.day}
                fill={item.nutrients.totalCalories >= totalCaloriesConsumedInDay ? "#137333" : "#a50e0e"}
              />
            ))}
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </aside>
  );
};

export default CaloriesChart;
