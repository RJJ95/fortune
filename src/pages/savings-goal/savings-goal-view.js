import { Wrapper, ChartsContainer, DataContainer } from "./savings-goal-style";
import SavingsGoalCard from "../../components/constructs/savings-goal-card";
import ResultCard from "../../components/constructs/result-card";

const SavingsGoal = () => {
  return (
    <Wrapper>
      <h1>Your savings goal</h1>
      <ChartsContainer>
        <DataContainer>
          <SavingsGoalCard
            color={null}
            title={null}
            description={null}
            Icon={null}
            progress={null}
          />
          <ResultCard difference="+$200" />
        </DataContainer>
      </ChartsContainer>
    </Wrapper>
  );
};

export default SavingsGoal;
