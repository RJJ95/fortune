import { useState } from "react";
import {
  Wrapper,
  Selector,
  DropdownArrow,
  BankSelect,
  SelectArea,
} from "./account-selector-style";
import AccountTable from "./components/account-table";

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
        <BankSelect>{banks.map((bank) => bank)}</BankSelect>
        <AccountTable data={data} />
      </SelectArea>
    </Wrapper>
  );
};

export default AccountSelector;
