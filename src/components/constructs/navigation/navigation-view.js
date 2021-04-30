import {
  Wrapper,
  Items,
  Item,
  Logo,
  Hr,
  ItemsContainer,
  ConfigurationItem,
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
              <Item
                key={index}
                to={route.path}
                activeStyle={{
                  fill: "black",
                }}
                exact={route.exact}
              >
                {route.icon}
              </Item>
            ))}
        </Items>
        {Object.values(routes)
          .filter((route) => route.name === "Configuration")
          .map((route, index) => (
            <ConfigurationItem
              key={index}
              to={route.path}
              activeStyle={{
                fill: "black",
              }}
              exact={route.exact}
            >
              {route.icon}
            </ConfigurationItem>
          ))}
      </ItemsContainer>
    </Wrapper>
  );
};

export default Navigation;
