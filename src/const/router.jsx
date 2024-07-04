import { DrinksPage } from "@/pages/Drinks";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PizzaPage } from "@/pages/PizzaPage";
import { SushiPage } from "@/pages/SushiPage";

const routerNavigations = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/pizzas",
    element: <PizzaPage />,
  },
  {
    path: "/sushi",
    element: <SushiPage />,
  },
  {
    path: "/drinks",
    element: <DrinksPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export { routerNavigations };
