import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Container,
  Title,
  Description,
  Progress,
} from "./savings-goal-card-style";
import CategoryIcon from "../category-icon";
import { theme } from "../../../config/theme";

const SavingsGoalCard = ({ id, color, title, description, Icon, progress }) => {
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

  return id ? (
    <Link to={`/savings-goal/${id}`}>
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
    </Link>
  ) : (
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
