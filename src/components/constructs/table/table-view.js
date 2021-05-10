import { TableWrapper, TableRow, TableCell } from "./table-style";
import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <TableWrapper {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
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
      </tbody>
    </TableWrapper>
  );
};

export default Table;
