import { Wrapper } from "./account-overview-cards-style";
import AddAccountCard from "../../constructs/add-account-card";
import AccountOverviewCard from "../../constructs/account-overview-card";

const AccountOverviewCards = ({accounts}) => {
  return (
    <Wrapper>
      {accounts.map((account, index) => (
        <AccountOverviewCard
          key={index}
          data={account.data}
          Logo={account.logo}
          accountNumber={account.accountNumber}
          balance={account.balance}
          difference={account.difference}
          serviceColor={account.serviceColor}
        />
      ))}
      <AddAccountCard />
    </Wrapper>
  );
};

export default AccountOverviewCards;
