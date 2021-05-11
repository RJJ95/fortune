import { useState } from "react";
import {
  Wrapper,
  ActiveListDetails,
  ListSubText,
  ListTitle,
} from "./stocks-style";
import StocksSubMenu from "../../components/constructs/stocks-sub-menu";
import StocksTable from "../../components/constructs/stocks-table";
import alphabet from "../../assets/images/alphabet-logo.png";
import facebook from "../../assets/images/facebook-logo.png";
import microsoft from "../../assets/images/microsoft-logo.png";
import ford from "../../assets/images/ford-logo.png";
import amazon from "../../assets/images/amazon-logo.png";
import apple from "../../assets/images/apple-logo.png";

const menuItems = [
  {
    name: "My portfolio",
    value: 1,
  },
  {
    name: "Tech watchlist",
    value: 2,
  },
  {
    name: "AEX",
    value: 3,
  },
  {
    name: "NASDAQ 100",
    value: 4,
  },
  {
    name: "LSE",
    value: 5,
  },
];

const data = [
  {
    logo: <img src={alphabet} alt="logo" />,
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "1.088.00",
    change: "-19.18",
  },
  {
    logo: <img src={facebook} alt="logo" />,
    symbol: "FB",
    name: "Facebook Inc.",
    price: "147.00",
    change: "-14.11",
  },
  {
    logo: <img src={microsoft} alt="logo" />,
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: "142.49",
    change: "-2.89",
  },
  {
    logo: <img src={ford} alt="logo" />,
    symbol: "F",
    name: "Ford Motor Company",
    price: "4.51",
    change: "-10.08",
  },
  {
    logo: <img src={amazon} alt="logo" />,
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: "142.49",
    change: "+2.18",
  },
  {
    logo: <img src={apple} alt="logo" />,
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "127.22",
    change: "-3.03",
  },
];

const listTitle = "My portfolio";
const numberOfListItems = "24";
const listUpdatedAtDate = "01/01/2021";
const listUpdatedAtTime = "00:00:00";

const Stocks = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Wrapper>
      <h1>It takes money to make money</h1>
      <StocksSubMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        menuItems={menuItems}
      />
      <ActiveListDetails>
        <ListTitle>{listTitle}</ListTitle>
        <ListSubText>{numberOfListItems} items</ListSubText>
        <ListSubText>
          Updated {listUpdatedAtDate} at {listUpdatedAtTime}
        </ListSubText>
      </ActiveListDetails>
      <StocksTable data={data} />
    </Wrapper>
  );
};

export default Stocks;
