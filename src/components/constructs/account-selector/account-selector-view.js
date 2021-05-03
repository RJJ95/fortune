import { useState, useContext } from "react";
import {
  Wrapper,
  Selector,
  DropdownArrow,
  BankSelect,
  SelectArea,
  LogoContainer,
} from "./account-selector-style";
import AccountTable from "./components/account-table";
import Context from "../../../config/context";

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
        <DropdownArrow />
      </Selector>
      <SelectArea show={showSelectArea}>
        <BankSelect>
          {banks.map((bank, index) => (
            <LogoContainer active={bank.name === context.activeBank}>
              <bank.Logo
                key={index}
                onClick={() => context.setActiveBank(bank.name)}
              />
            </LogoContainer>
          ))}
        </BankSelect>
        <AccountTable data={data} />
      </SelectArea>
    </Wrapper>
  );
};

export default AccountSelector;
