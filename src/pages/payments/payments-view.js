import PaymentCategoryOverview from "../../components/sections/payment-category-overview";
import { ReactComponent as Logo } from "../../assets/images/ing-logo.svg";
import { ReactComponent as Abn } from "../../assets/images/abn-logo.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import PaymentsTable from "../../components/constructs/payments-table";
import AccountSelector from "../../components/constructs/account-selector";
import ah from "../../assets/images/ah-logo.png"

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
  {
    icon: <Sun />,
    category: "Energy",
    description: "Fossil fuel is not done",
    expenditure: "$95",
  },
];

const data = [
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
  {
    logo: <img src={ah} alt="ah-logo" />,
    name: "Albert Heijn",
    status: "Completed",
    amount: "$65",
    date: "09 Dec 2020",
    time: "14:10",
  },
];

const banks = [
  {
    name: "Ing",
    Logo: Logo,
  },
  {
    name: "Abn",
    Logo: Abn,
  },
];

const Payments = () => {
  return (
    <>
      <AccountSelector banks={banks} logo={<Logo />} />
      <h1>Payments received and made</h1>
      <PaymentCategoryOverview
        accountDetails={accountDetails}
        categories={categories}
      />
      <PaymentsTable data={data} />
    </>
  );
};

export default Payments;
