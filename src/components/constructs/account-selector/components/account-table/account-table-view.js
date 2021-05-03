import { Table, Tbody, TableRow, TableCell } from "./account-table-style";
import { useTable } from "react-table";

const columns = [
  {
    accessor: "accountNumber",
  },
  {
    accessor: "accountOwner",
  },
  {
    accessor: "accountBalance",
  },
];

const AccountTable = ({ data }) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
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
  );
};

export default AccountTable;
