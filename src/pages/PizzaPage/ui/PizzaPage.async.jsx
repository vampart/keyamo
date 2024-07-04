import { lazy } from "react";

const PizzaPageAsync = lazy(() => {
  return import("./PizzaPage");
});

export { PizzaPageAsync };
