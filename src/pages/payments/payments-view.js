import { Wrapper } from "./payments-style";
import PaymentCategoryOverview from "../../components/sections/payment-category-overview";
import { ReactComponent as Logo } from "../../assets/images/ing-logo.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";

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

const Payments = () => {
  return (
    <Wrapper>
      <PaymentCategoryOverview
        accountDetails={accountDetails}
        categories={categories}
      />
    </Wrapper>
  );
};

export default Payments;
