import { Wrapper, Items, Item, Logo } from "./navigation-style";
import { routes } from "../../../config/routes";
import logo from "../../../assets/images/logo.png";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Items>
        {Object.values(routes)
          .filter((route) => route.name)
          .map((route) => (
            <Item to={route.path}>{route.name}</Item>
          ))}
      </Items>
    </Wrapper>
  );
};

export default Navigation;
