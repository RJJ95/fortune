import { Wrapper } from "./stocks-table-style";
import Table from "../table";

const columns = [
  {
    header: "",
    accessor: "logo",
  },
  {
    header: "",
    accessor: "symbol",
  },
  {
    header: "",
    accessor: "name",
  },
  {
    header: "",
    accessor: "price",
  },
  {
    header: "",
    accessor: "change",
  },
];

const StocksTable = ({ data }) => {
  return (
    <Wrapper>
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};

export default StocksTable;
