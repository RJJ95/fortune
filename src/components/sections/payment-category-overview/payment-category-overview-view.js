import { Wrapper } from "./payment-category-overview-style";
import CategoryOverviewCard from "../../constructs/category-overview-card";
import AccountOverviewCard from "../../constructs/account-overview-card";

const PaymentCategoryOverview = ({ accountDetails, categories }) => {
  return (
    <Wrapper>
      <AccountOverviewCard
        data={accountDetails.data}
        Logo={accountDetails.logo}
        accountNumber={accountDetails.accountNumber}
        balance={accountDetails.balance}
        difference={accountDetails.difference}
        serviceColor={accountDetails.serviceColor}
      />
      {categories.map((category, index) => (
        <CategoryOverviewCard
          key={index}
          Icon={category.icon}
          category={category.category}
          description={category.description}
          expenditure={category.expenditure}
        />
      ))}
    </Wrapper>
  );
};

export default PaymentCategoryOverview;
