import { Wrapper } from "./saving-goals-overview-style";
import SavingGoalCard from "../../constructs/savings-goal-card";

const SavingGoalsOverview = ({ savingGoals }) => {
  return (
    <Wrapper>
      {savingGoals.map((savingGoal, index) => (
        <SavingGoalCard
          key={index}
          id={savingGoal.id}
          Icon={savingGoal.Icon}
          color={savingGoal.color}
          title={savingGoal.title}
          description={savingGoal.description}
          chartData={savingGoal.chartData}
          progress={savingGoal.progress}
        />
      ))}
    </Wrapper>
  );
};

export default SavingGoalsOverview;
