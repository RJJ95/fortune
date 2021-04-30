import { Wrapper } from "./testing-playground-style";

import { ReactComponent as Logo } from "../../assets/images/ing-logo.svg";

import AccountOverviewCard from "../../components/constructs/account-overview-card";

const data = {
  data: [
    { uv: 100 },
    { uv: 300 },
    { uv: 200 },
    { uv: 500 },
    { uv: 600 },
    { uv: 300 },
    { uv: 500 },
    { uv: 600 },
    { uv: 100 },
  ],
  logo: <Logo />,
  accountNumber: "NL23 INGB 0003 161 806",
  balance: "$389",
  difference: "+5",
  serviceColor: "#FF6200",
};

const TestingPlayground = () => {
  return (
    <Wrapper>
      <AccountOverviewCard
        data={data.data}
        Logo={data.logo}
        accountNumber={data.accountNumber}
        balance={data.balance}
        difference={data.difference}
        serviceColor={data.serviceColor}
      />
    </Wrapper>
  );
};

export default TestingPlayground;
