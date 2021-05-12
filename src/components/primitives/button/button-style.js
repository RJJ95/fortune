import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${(props) => props.theme.colors[props.fontColor]};
`;
