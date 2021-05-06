import { Wrapper, Difference, Text } from "./amount-to-go-card-style";

const AmountToGoCard = ({ difference }) => {
  return (
    <Wrapper>
      <Difference>
        {difference}
      </Difference>
      <Text>To go</Text>
    </Wrapper>
  );
};

export default AmountToGoCard;
