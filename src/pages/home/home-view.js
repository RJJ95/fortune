import { Wrapper } from "./home-style";

import { ReactComponent as Logo } from "../../assets/images/ing-logo.svg";
import AccountOverviewCards from "../../components/sections/account-overview-cards";
import DoubleLineChart from "../../components/constructs/double-line-chart";

const data = [
  {
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
  },
];

const chartData = [
  {
    month: "1/1",
    expenses: "800",
    income: "2300",
  },
  {
    month: "1/2",
    expenses: "500",
    income: "2400",
  },
  {
    month: "1/3",
    expenses: "800",
    income: "2100",
  },
  {
    month: "1/4",
    expenses: "800",
    income: "2300",
  },
  {
    month: "1/5",
    expenses: "500",
    income: "2400",
  },
  {
    month: "1/6",
    expenses: "800",
    income: "2100",
  },
];

const Home = () => {
  return (
    <Wrapper>
      <h1>Make your own fortune</h1>
      <AccountOverviewCards accounts={data} />
      <DoubleLineChart data={chartData} />
    </Wrapper>
  );
};

export default Home;
