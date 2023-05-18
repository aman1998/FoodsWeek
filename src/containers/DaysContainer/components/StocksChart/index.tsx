import { FC } from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

import { IDayData } from "../../store/types";

const Chart: FC<{ data: IDayData[] }> = ({ data = [] }) => (
  <aside className="stocks-chart">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" style={{ fontSize: 10 }} />
        <Tooltip />
        <Bar dataKey="changePercent" fill="#8884d8">
          {data.map(item => (
            <Cell key={item.type} fill={item.changePercent >= 0 ? "#137333" : "#a50e0e"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </aside>
);

export default Chart;
