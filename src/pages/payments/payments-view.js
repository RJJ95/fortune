import { Wrapper } from "./payments-style";
import PaymentCategoryOverview from "../../components/sections/payment-category-overview";
import { ReactComponent as Logo } from "../../assets/images/ing-logo.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as AH } from "../../assets/images/ah-logo.svg";
import PaymentsTable from "../../components/constructs/payments-table";
import AccountSelector from "../../components/constructs/account-selector";

const accountDetails = {
  data: [
    { uv: 100 },
    { uv: 300 },
    { uv: 200 },
    { uv: 500 },
    { uv: 600 },
    { uv: 300 },
    { uv: 500 },
    { uv: 600 },
    { uv: 100 },
  ],
  logo: <Logo />,
  accountNumber: "NL23 INGB 0003 161 806",
  balance: "$389",
  difference: "+5",
  serviceColor: "#FF6200",
};

const categories = [
  {
    icon: <Sun />,
    category: "Energy",
    description: "Fossil fuel is not done",
    expenditure: "$95",
  },
  {
    icon: <Sun />,
    category: "Energy",
    description: "Fossil fuel is not done",
    expenditure: "$95",
  },
  {
    icon: <Sun />,
    category: "Energy",
    description: "Fossil fuel is not done",
    expenditure: "$95",
  },
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

const data = [
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <AH />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
];

const banks = [<Logo />]

const Payments = () => {
  return (
    <Wrapper>
      <AccountSelector banks={banks} logo={<Logo />} />
      <h1>Payments received and made</h1>
      <PaymentCategoryOverview
        accountDetails={accountDetails}
        categories={categories}
      />
      <PaymentsTable columns={columns} data={data} />
    </Wrapper>
  );
};

export default Payments;
