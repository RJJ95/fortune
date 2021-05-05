import styled from "styled-components";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  > div:not(:last-child) {
    margin-bottom: 35px;
  }
`;
