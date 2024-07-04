import { lazy } from "react";

const NotFoundPageAsync = lazy(() => {
  return import("./NotFoundPage");
});

export { NotFoundPageAsync };
