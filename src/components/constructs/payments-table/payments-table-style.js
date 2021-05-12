import styled from "styled-components";
import Column from "../../primitives/column";

export const Hr = styled.hr`
  width: 95%;
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  margin-top: 15px;
  margin-bottom: 0;
`;

export const FiltersContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding-top: 40px;
`;

export const Wrapper = styled(Column)``;
