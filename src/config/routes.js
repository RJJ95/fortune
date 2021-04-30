import Insurance from "../pages/insurance";
import Configuration from "../pages/configuration";
import Stocks from "../pages/stocks";
import Savings from "../pages/savings";
import Payments from "../pages/payments";
import Home from "../pages/home";
import PageNotFound from "../pages/page-not-found";
import TestingPlayground from "../pages/testing-playground";

// Icons
import { ReactComponent as Person } from "../assets/icons/person.svg";
import { ReactComponent as Card } from "../assets/icons/card.svg";
import { ReactComponent as Archive } from "../assets/icons/archive.svg";
import { ReactComponent as Ember } from "../assets/icons/ember.svg";
import { ReactComponent as Graph } from "../assets/icons/graph.svg";
import { ReactComponent as Gear } from "../assets/icons/gear.svg";

export const routes = {
  home: {
    path: "/",
    exact: true,
    component: Home,
    icon: <Person />,
    name: "Home",
  },
  testingPlayground: {
    path: "/testing-playground",
    exact: true,
    component: TestingPlayground,
  },
  pageNotFound: {
    component: PageNotFound,
  },
  payments: {
    path: "/payments",
    exact: true,
    component: Payments,
    icon: <Card />,
    name: "Payments",
  },
  savings: {
    path: "/savings",
    exact: true,
    component: Savings,
    icon: <Archive />,
    name: "Savings",
  },
  stocks: {
    path: "/stocks",
    exact: true,
    component: Stocks,
    icon: <Graph />,
    name: "Stocks",
  },
  configuration: {
    path: "/configuration",
    exact: true,
    component: Configuration,
    icon: <Gear />,
    name: "Configuration",
  },
  insurance: {
    path: "/insurance",
    exact: true,
    component: Insurance,
  },
};
