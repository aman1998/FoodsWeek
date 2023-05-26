import { FC } from "react";
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { ISingleDay } from "features/User/store/types";

import { getMinCount } from "../../utils";

const Chart: FC<{ data: ISingleDay[] }> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis minTickGap={100} domain={[getMinCount(data), "auto"]} />
      <Tooltip />
      <Line type="monotone" dataKey="open" stroke="#8884d8" />
      <Line type="monotone" dataKey="close" stroke="#137333" />
      <Line type="monotone" dataKey="uHigh" stroke="#1cb0f6" />
      <Line type="monotone" dataKey="uLow" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
