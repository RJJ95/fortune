import { useState, useEffect } from "react";
import {
  Wrapper,
  IconContainer,
  Category,
  Description,
  Expenditure,
} from "./category-overview-card-style";
import { theme } from "../../../config/theme";

const CategoryOverviewCard = ({ Icon, category, description, expenditure }) => {
  const [fill, setFill] = useState();
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    switch (category) {
      case "Energy":
        setBackgroundColor(theme.colors.lightGreen);
        setFill(theme.colors.green);
        break;
      default:
        return theme.colors.mediumGrey;
    }
  }, [category]);

  return (
    <Wrapper>
      <IconContainer backgroundColor={backgroundColor} fill={fill}>
        {Icon}
      </IconContainer>
      <Category>{category}</Category>
      <Description>{description}</Description>
      <Expenditure>{expenditure}</Expenditure>
    </Wrapper>
  );
};

export default CategoryOverviewCard;
