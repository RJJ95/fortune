import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";

import { Wrapper } from "./double-line-chart-style";

const DoubleLineChart = ({ data }) => {
  return (
    <Wrapper>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data}>
          <Legend verticalAlign="top" align="right" height={36} />
          <CartesianGrid />
          <XAxis tickLine={false} axisLine={false} dataKey="month" />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Line
            dot={false}
            type="monotone"
            dataKey="expenses"
            strokeWidth={4}
            stroke="#FF3A29"
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="income"
            strokeWidth={4}
            stroke="#34B53A"
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default DoubleLineChart;
