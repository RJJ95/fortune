import { Wrapper } from "./area-line-chart-style";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import { theme } from "../../../config/theme";

const AreaLineChart = ({ data }) => {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            right: 30,
            top: 30,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke={theme.colors.purple}
            fill={theme.colors.lightPurple}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default AreaLineChart;
