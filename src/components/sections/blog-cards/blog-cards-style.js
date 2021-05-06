import styled from "styled-components";
import Column from "../../primitives/column";
import Row from "../../primitives/row";

export const Wrapper = styled(Row)`
  > div:not(:last-child) {
    margin-right: 40px;
  }
`;

export const BlogColumn = styled(Column)`
  > div:not(:last-child) {
    margin-bottom: 40px;
  }
`;
