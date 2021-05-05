import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Wrapper } from "./stacked-bar-chart-style";

const StackedBarChart = ({ bars, data }) => {
  return (
    <Wrapper width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          right: 20,
          left: 20,
          top: 20,
          bottom: 20,
        }}
        barCategoryGap="70%"
      >
        <XAxis tickLine={false} axisLine={false} dataKey="name" />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "none",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
          }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          height={40}
        />
        {bars.map((bar, index) => (
          <Bar key={index} dataKey={bar.key} fill={bar.color} stackId="a" />
        ))}
      </BarChart>
    </Wrapper>
  );
};

export default StackedBarChart;
