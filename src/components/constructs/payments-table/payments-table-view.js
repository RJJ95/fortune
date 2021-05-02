import {
  Table,
  Tbody,
  TableRow,
  TableCell,
  Hr,
  FiltersContainer,
} from "./payments-table-style";
import { useTable } from "react-table";
import Filters from "./components/filters";

const statusOptions = [
  { name: "Select status", value: 0 },
  { name: "In progress", value: 1 },
  { name: "Completed", value: 2 },
  { name: "Cancelled", value: 3 },
];

const categoryOptions = [
  { name: "Select category", value: 0 },
  { name: "In progress", value: 1 },
  { name: "Completed", value: 2 },
  { name: "Cancelled", value: 3 },
];

const sortOptions = [
  { name: "High to low", value: 1 },
  { name: "Low to high", value: 2 },
  { name: "A - Z", value: 3 },
  { name: "A - A", value: 4 },
];

const PaymentsTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <>
      <FiltersContainer>
        <Filters
          categoryOptions={categoryOptions}
          statusOptions={statusOptions}
          sortOptions={sortOptions}
        />
        <Hr />
      </FiltersContainer>
      <Table {...getTableProps()}>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <TableRow key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <TableCell key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default PaymentsTable;
