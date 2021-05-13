import { Difference } from "./stocks-table-style";
import Table from "../table";
import Row from "../../primitives/row";

const columns = [
  {
    accessor: "logo",
    Cell: ({ cell }) => <Row>{cell.value}</Row>,
  },
  {
    accessor: "symbol",
  },
  {
    accessor: "name",
  },
  {
    accessor: "price",
  },
  {
    accessor: "change",
    Cell: ({ cell }) => (
      <Difference signum={cell.value.charAt(0) === "+"}>
        {cell.value}%
      </Difference>
    ),
  },
];

const StocksTable = ({ data }) => <Table columns={columns} data={data} />;

export default StocksTable;
