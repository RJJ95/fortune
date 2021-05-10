import { Wrapper, MenuItems, Item, Hr } from "./stocks-sub-menu-style";

const StocksSubMenu = ({ menuItems, setActiveTab, activeTab }) => {
  return (
    <Wrapper>
      <MenuItems>
        {menuItems.map((item, index) => (
          <Item
            key={index}
            active={activeTab === item.value}
            onClick={() => setActiveTab(item.value)}
          >
            {item.name}
          </Item>
        ))}
      </MenuItems>
      <Hr />
    </Wrapper>
  );
};

export default StocksSubMenu;
