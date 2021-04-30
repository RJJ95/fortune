import { Wrapper } from "./home-style";

import { ReactComponent as Logo } from "../../assets/images/ing-logo.svg";
import AccountOverviewCards from "../../components/sections/account-overview-cards";

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

const Home = () => {
  return (
    <Wrapper>
      <AccountOverviewCards accounts={data} />
    </Wrapper>
  );
};

export default Home;
