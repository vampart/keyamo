import { lazy } from "react";

const MainPageAsync = lazy(() => {
  return import("./MainPage");
});

export { MainPageAsync };
