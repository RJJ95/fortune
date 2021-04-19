import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import PageNotFound from "./pages/page-not-found";

// Components
import Layout from "./components/functionals/layout";

// Config
import { paths } from "./config/paths";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path={paths.home} component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
