import styled from 'styled-components';
import Row from "../../../../primitives/row"

export const Container = styled(Row)`
  > div:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Wrapper = styled(Row)`
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  width: 200px;
`;