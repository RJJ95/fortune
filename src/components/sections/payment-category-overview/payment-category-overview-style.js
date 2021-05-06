import styled from "styled-components";
import Row from "../../primitives/row";

export const Wrapper = styled(Row)`
  overflow: auto;
  > div:not(:last-child) {
    margin-right: 40px;
  }
`;
