import { Body, Wrapper } from "./layout-style";

// Components
import Navigation from "../../constructs/navigation";

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Body>{children}</Body>
  </Wrapper>
);

export default Layout;
