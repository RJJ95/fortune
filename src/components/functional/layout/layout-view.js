import { Wrapper } from "./layout-style";

// Components
import Navigation from "../../constructs/navigation";
import Footer from "../../constructs/footer";

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation />
    {children}
    <Footer />
  </Wrapper>
);

export default Layout;
