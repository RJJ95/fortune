import styled from "styled-components";
import Column from "../../components/primitives/column";

export const Wrapper = styled.div``;

export const ActiveListDetails = styled(Column)`
  margin: 40px 0;
`;

export const ListSubText = styled.h4`
  margin: 0;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.mediumGrey};
`;

export const ListTitle = styled.h4`
  margin: 0;
  margin-bottom: 5px;
`;
