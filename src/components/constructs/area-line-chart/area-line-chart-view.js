import { Wrapper } from "./area-line-chart-style";
import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";

const AreaLineChart = ({ data }) => {
  return (
    <Wrapper width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </Wrapper>
  );
};

export default AreaLineChart;
