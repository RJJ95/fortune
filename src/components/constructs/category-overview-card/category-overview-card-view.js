import { useState, useEffect } from "react";
import {
  Wrapper,
  Category,
  Description,
  Expenditure,
  UpperSection,
} from "./category-overview-card-style";
import CategoryIcon from "../category-icon";

const CategoryOverviewCard = ({ Icon, category, description, expenditure }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    switch (category) {
      case "Energy":
        setColor("green");
        break;
      default:
        setColor("");
    }
  }, [category]);

  return (
    <Wrapper>
      <UpperSection>
        <CategoryIcon color={color} Icon={Icon} />
        <Category>{category}</Category>
        <Description>{description}</Description>
      </UpperSection>
      <Expenditure>{expenditure}</Expenditure>
    </Wrapper>
  );
};

export default CategoryOverviewCard;
