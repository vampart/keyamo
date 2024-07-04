import { lazy } from "react";

const DrinksPageAsync = lazy(() => {
  return import("./DrinksPage");
});

export { DrinksPageAsync };
