import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Layout from "./components/functionals/layout";

// Config
import { routes } from "./config/routes";

// Context
import Context from "./config/context";

function App() {
  const [activeBank, setActiveBank] = useState("Ing");

  return (
    <Context.Provider value={{ activeBank, setActiveBank }}>
      <Router>
        <Layout>
          <Switch>
            {Object.values(routes).map((route, index) => (
              <Route
                exact={route.exact}
                key={index}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Layout>
      </Router>
    </Context.Provider>
  );
}

export default App;
