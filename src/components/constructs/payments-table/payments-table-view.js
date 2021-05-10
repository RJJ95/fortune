import { Hr, FiltersContainer, Wrapper } from "./payments-table-style";
import Filters from "./components/filters";
import Table from "../table";

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

const columns = [
  {
    header: "",
    accessor: "logo",
  },
  {
    header: "",
    accessor: "name",
  },
  {
    header: "",
    accessor: "status",
  },
  {
    header: "",
    accessor: "amount",
  },
  {
    header: "",
    accessor: "date",
  },
  {
    header: "",
    accessor: "time",
  },
];

const PaymentsTable = ({ data }) => {
  return (
    <Wrapper>
      <FiltersContainer>
        <Filters
          categoryOptions={categoryOptions}
          statusOptions={statusOptions}
          sortOptions={sortOptions}
        />
        <Hr />
      </FiltersContainer>
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};

export default PaymentsTable;
