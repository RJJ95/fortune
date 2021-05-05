import styled from "styled-components";
import Column from "../../primitives/column";

export const IconContainer = styled(Column)`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50px;
  width: 90px;
  height: 90px;

  svg {
    fill: ${(props) => props.fill};
    width: 45px;
    height: 45px;
  }
`;
