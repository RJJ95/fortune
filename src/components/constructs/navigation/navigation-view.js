import {
  Wrapper,
  Items,
  Item,
  Logo,
  Hr,
  ItemsContainer,
  ConfigurationItem,
  ItemContainer,
  Tooltip,
  ConfigurationItemContainer,
} from "./navigation-style";
import { routes } from "../../../config/routes";
import logo from "../../../assets/images/logo.svg";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Hr />
      <ItemsContainer>
        <Items>
          {Object.values(routes)
            .filter((route) => route.icon && route.name !== "Configuration")
            .map((route, index) => (
              <ItemContainer key={index}>
                <Item
                  to={route.path}
                  activeStyle={{
                    fill: "black",
                  }}
                  exact={route.exact}
                  content={route.name}
                >
                  {route.icon}
                </Item>
                <Tooltip>{route.name}</Tooltip>
              </ItemContainer>
            ))}
        </Items>
        {Object.values(routes)
          .filter((route) => route.name === "Configuration")
          .map((route, index) => (
            <ConfigurationItemContainer key="configuration">
              <ConfigurationItem
                to={route.path}
                activeStyle={{
                  fill: "black",
                }}
                exact={route.exact}
              >
                {route.icon}
              </ConfigurationItem>
              <Tooltip>{route.name}</Tooltip>
            </ConfigurationItemContainer>
          ))}
      </ItemsContainer>
    </Wrapper>
  );
};

export default Navigation;
