import { useState } from "react";
import {
  Wrapper,
  ActiveListDetails,
  ListSubText,
  ListTitle,
} from "./stocks-style";
import StocksSubMenu from "../../components/constructs/stocks-sub-menu";
import StocksTable from "../../components/constructs/stocks-table";
import { ReactComponent as Alphabet } from "../../assets/images/alphabet-logo.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook-logo.svg";
import { ReactComponent as Microsoft } from "../../assets/images/microsoft-logo.svg";
import { ReactComponent as Ford } from "../../assets/images/ford-logo.svg";
import { ReactComponent as Amazon } from "../../assets/images/amazon-logo.svg";
import { ReactComponent as Apple } from "../../assets/images/apple-logo.svg";

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
    logo: <Alphabet />,
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "1.088.00",
    change: "-19.18",
  },
  {
    logo: <Facebook />,
    symbol: "FB",
    name: "Facebook Inc.",
    price: "147.00",
    change: "-14.11",
  },
  {
    logo: <Microsoft />,
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: "142.49",
    change: "-2.89",
  },
  {
    logo: <Ford />,
    symbol: "F",
    name: "Ford Motor Company",
    price: "4.51",
    change: "-10.08",
  },
  {
    logo: <Amazon />,
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: "142.49",
    change: "+2.18",
  },
  {
    logo: <Apple />,
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
