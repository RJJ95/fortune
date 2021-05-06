import {
  Wrapper,
  ChartsContainer,
  DataContainer,
  AreaChartContainer,
  SavingsGoalCardContainer,
  ResultCardContainer,
} from "./savings-goal-style";
import SavingsGoalCard from "../../components/constructs/savings-goal-card";
import ResultCard from "../../components/constructs/result-card";
import AreaLineChart from "../../components/constructs/area-line-chart";

const data = [
  {
    name: "1",
    uv: 0,
  },
  {
    name: "2",
    uv: 100,
  },
  {
    name: "3",
    uv: 200,
  },
  {
    name: "4",
    uv: 300,
  },
  {
    name: "5",
    uv: 400,
  },
  {
    name: "6",
    uv: 500,
  },
  {
    name: "7",
    uv: 650,
  },
];

const SavingsGoal = () => {
  return (
    <Wrapper>
      <h1>Your savings goal</h1>
      <ChartsContainer>
        <DataContainer>
          <SavingsGoalCardContainer>
            <SavingsGoalCard
              color="green"
              title="PS5"
              description="My savings goal"
              Icon={null}
              progress={69}
            />
          </SavingsGoalCardContainer>
          <ResultCardContainer>
            <ResultCard difference="+$200" />
          </ResultCardContainer>
        </DataContainer>
        <AreaChartContainer>
          <AreaLineChart data={data} />
        </AreaChartContainer>
      </ChartsContainer>
    </Wrapper>
  );
};

export default SavingsGoal;
