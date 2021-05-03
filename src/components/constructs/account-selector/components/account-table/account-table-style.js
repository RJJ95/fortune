import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr`
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const TableCell = styled.td`
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  :first-child {
    padding-left: 10px;
  }
`;

export const Hr = styled.hr``;
