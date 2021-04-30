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

export const routes = {
  home: {
    path: "/",
    exact: true,
    component: Home,
    name: <Person />,
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
  },
  savings: {
    path: "/savings",
    exact: true,
    component: Savings,
  },
  stocks: {
    path: "/stocks",
    exact: true,
    component: Stocks,
  },
  configuration: {
    path: "/configuration",
    exact: true,
    component: Configuration,
  },
  insurance: {
    path: "/insurance",
    exact: true,
    component: Insurance,
  },
};
