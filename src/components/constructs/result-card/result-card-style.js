import styled from "styled-components";
import Card from "../../primitives/card";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  ${Card}
  justify-content: center;
  width: 100%;
  height: 90px;
`;

export const Difference = styled.h1`
  color: ${(props) =>
    props.signum ? props.theme.colors.green : props.theme.colors.red};
  margin: 0;
  font-weight: 100;
`;

export const Text = styled.h2`
  margin: 0;
`;
