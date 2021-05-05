import { Wrapper, Difference, Text } from "./result-card-style";

const ResultCard = ({ difference }) => {
  return (
    <Wrapper>
      <Difference signum={difference.charAt(0) === "+"}>
        {difference}
      </Difference>
      <Text>Last months result</Text>
    </Wrapper>
  );
};

export default ResultCard;
