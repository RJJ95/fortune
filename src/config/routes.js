// Pages
import Home from "../pages/home";
import PageNotFound from "../pages/page-not-found";
import TestingPlayground from "../pages/testing-playground";

export const routes = {
  home: {
    path: "/",
    exact: true,
    component: Home,
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
