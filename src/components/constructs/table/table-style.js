import styled from "styled-components";
import Card from "../../primitives/card";

export const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0 15px;
`;

export const TableRow = styled.tr`
  ${Card}
  height: 75px;
`;

export const TableCell = styled.td`
  padding: 25px;
  height: 100%;
  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  :last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
  svg {
    max-height: 24px;
    max-width: 24px;
  }
  img {
    max-height: 25px;
    width: auto;
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
