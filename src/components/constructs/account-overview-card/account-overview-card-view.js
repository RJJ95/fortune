import { LineChart, Line } from "recharts";

import {
  Wrapper,
  LogoContainer,
  AccountNumber,
  Balance,
  Difference,
} from "./account-overview-card-style";

const AccountOverviewCard = ({
  data,
  Logo,
  accountNumber,
  balance,
  difference,
  serviceColor,
}) => {
  return (
    <Wrapper>
      <LogoContainer>{Logo}</LogoContainer>
      <AccountNumber>{accountNumber}</AccountNumber>
      <Balance>{balance}</Balance>
      <Difference signum={difference.charAt(0) === "+"}>
        {difference}%
      </Difference>
      <LineChart width={200} height={100} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke={serviceColor}
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </Wrapper>
  );
};

export default AccountOverviewCard;
