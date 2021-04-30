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
};
