import { useState, useEffect } from "react";
import { IconContainer } from "./category-icon-style";
import { theme } from "../../../config/theme";

const CategoryIcon = ({ color, Icon }) => {
  const [fill, setFill] = useState();
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    switch (color) {
      case "green":
        setBackgroundColor(theme.colors.lightGreen);
        setFill(theme.colors.green);
        break;
      default:
        return theme.colors.mediumGrey;
    }
  }, [color]);

  return (
    <IconContainer backgroundColor={backgroundColor} fill={fill}>
      {Icon}
    </IconContainer>
  );
};

export default CategoryIcon;
