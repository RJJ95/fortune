import { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Title,
  Description,
  Progress,
} from "./savings-goal-card-style";
import CategoryIcon from "../category-icon";
import { theme } from "../../../config/theme";

const SavingsGoalCard = ({ color, title, description, Icon, progress }) => {
  const [foregroundColor, setForegroundColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    switch (color) {
      case "green":
        setBackgroundColor(theme.colors.lightGreen);
        setForegroundColor(theme.colors.green);
        break;
      default:
        return theme.colors.mediumGrey;
    }
  }, [color]);

  return (
    <Wrapper>
      <CategoryIcon Icon={Icon} color={color} />
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
          <Progress
            backgroundColor={backgroundColor}
            progress={progress}
            foregroundColor={foregroundColor}
          />
      </Container>
    </Wrapper>
  );
};

export default SavingsGoalCard;
