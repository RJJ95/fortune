import {
  Container,
  ChartContainer,
  SavingGoalsContainer,
} from "./savings-style";
import StackedBarChart from "../../components/constructs/stacked-bar-chart";
import SavingGoalsOverview from "../../components/sections/saving-goals-overview";
import { ReactComponent as Bulb } from "../../assets/icons/bulb.svg";
import { theme } from "../../config/theme";
import AccountSelector from "../../components/constructs/account-selector";
import { ReactComponent as Logo } from "../../assets/images/ing-logo.svg";
import { ReactComponent as Abn } from "../../assets/images/abn-logo.svg";

const savingGoals = [
  {
    title: "PS5",
    description: "A present for myself.",
    Icon: <Bulb />,
    color: "green",
    progress: 60,
    id: 1,
  },
  {
    title: "PS5",
    description: "A present for myself.",
    Icon: <Bulb />,
    color: "green",
    progress: 66,
    id: 2,
  },
  {
    title: "PS5",
    description: "A present for myself.",
    Icon: <Bulb />,
    color: "green",
    progress: 66,
    id: 3,
  },
];

const data = [
  {
    name: "01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    dft: 400,
  },
  {
    name: "02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    dft: 400,
  },
  {
    name: "03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    dft: 400,
  },
  {
    name: "04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    dft: 400,
  },
  {
    name: "05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    dft: 400,
  },
  {
    name: "06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    dft: 400,
  },
  {
    name: "07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    dft: 400,
  },
];

const bars = [
  {
    key: "uv",
    color: theme.colors.green,
  },
  {
    key: "dft",
    color: theme.colors.transparent,
  },
  {
    key: "pv",
    color: theme.colors.yellow,
  },
  {
    key: "dft",
    color: theme.colors.transparent,
  },
  {
    key: "amt",
    color: theme.colors.purple,
  },
];

const banks = [
  {
    name: "Ing",
    Logo: Logo,
  },
  {
    name: "Abn",
    Logo: Abn,
  },
];

const Savings = () => {
  return (
    <>
      <AccountSelector banks={banks} logo={<Logo />} />
      <h1>Saving for a rainy day</h1>
      <Container>
        <ChartContainer>
          <StackedBarChart data={data} bars={bars} />
        </ChartContainer>
        <SavingGoalsContainer>
          <SavingGoalsOverview savingGoals={savingGoals} />
        </SavingGoalsContainer>
      </Container>
    </>
  );
};

export default Savings;
