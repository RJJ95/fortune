import { useState, useContext } from "react";
import {
  Wrapper,
  Selector,
  DropdownArrow,
  BankSelect,
  SelectArea,
  LogoContainer,
  CloseIcon,
} from "./account-selector-style";
import AccountTable from "./components/account-table";
import Context from "../../../config/context";
import FadeTransition from "../../functionals/fade-transition";

const data = [
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
  {
    accountNumber: "NL23 INGB 0003 161 806",
    accountOwner: "RJJ de Vries",
    accountBalance: "$2001",
  },
];

const AccountSelector = ({ logo, banks }) => {
  const [showSelectArea, setShowSelectArea] = useState(false);
  const context = useContext(Context);

  return (
    <Wrapper>
      <Selector
        show={showSelectArea}
        onClick={() => setShowSelectArea(!showSelectArea)}
      >
        {logo}
        {showSelectArea ? <CloseIcon /> : <DropdownArrow />}
      </Selector>
      <FadeTransition isVisible={showSelectArea}>
        <SelectArea>
          <BankSelect>
            {banks.map((bank, index) => (
              <LogoContainer
                key={index}
                active={bank.name === context.activeBank}
              >
                <bank.Logo onClick={() => context.setActiveBank(bank.name)} />
              </LogoContainer>
            ))}
          </BankSelect>
          <AccountTable data={data} />
        </SelectArea>
      </FadeTransition>
    </Wrapper>
  );
};

export default AccountSelector;
