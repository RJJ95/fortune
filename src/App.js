import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";

// Components
import Layout from "./components/functional/layout";

// Config
import { paths } from "./config/paths";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path={paths.home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
