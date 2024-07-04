import { lazy } from "react";

const SushiPageAsync = lazy(() => {
  return import("./SushiPage");
});

export { SushiPageAsync };
