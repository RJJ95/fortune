import { StyledButton } from "./button-style";

const Button = ({ children, onClick, color, fontColor }) => (
  <StyledButton fontColor={fontColor} color={color} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
