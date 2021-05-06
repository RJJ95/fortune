import styled from "styled-components";
import Column from "../../primitives/column";
import Row from "../../primitives/row";

export const Body = styled(Column)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 25px 40px 40px;
  width: calc(100% - 176px);
`;

export const Wrapper = styled(Row)`
  width: 100%;
`;
