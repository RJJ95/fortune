import { Primary, Secondary, Tertiary } from "./button-style";

const Button = ({ type, children, onClick }) => {
  switch (type) {
    case "primary":
      return <Primary onClick={onClick}>{children}</Primary>;
    case "secondary":
      return <Secondary onClick={onClick}>{children}</Secondary>;
    case "tertiary":
      return <Tertiary onClick={onClick}>{children}</Tertiary>;
    default:
      return <Primary onClick={onClick}>{children}</Primary>;
  }
};

export default Button;
