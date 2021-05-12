import styled from "styled-components";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  label {
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
`;
