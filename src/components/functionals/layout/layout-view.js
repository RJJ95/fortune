import { Body } from "./layout-style";
import Row from "../../primitives/row";

// Components
import Navigation from "../../constructs/navigation";

const Layout = ({ children }) => (
  <Row>
    <Navigation />
    <Body>{children}</Body>
  </Row>
);

export default Layout;
