import styled from "styled-components";
import Row from "../../primitives/row";

export const Wrapper = styled(Row)`
  > div:not(:last-child) {
    margin-right: 40px;
  }
`;
