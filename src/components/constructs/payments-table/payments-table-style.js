import styled from "styled-components";
import Card from "../../primitives/card";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 15px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr`
  ${Card}
  border-spacing: 0 20px;
`;

export const TableCell = styled.td`
  padding: 25px;
  margin-bottom: 20px;
  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  :last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Hr = styled.hr`
  width: 95%;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  margin-top: 15px;
  margin-bottom: 0;
`;

export const FiltersContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding-top: 40px;
`;
