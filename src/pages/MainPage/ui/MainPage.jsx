import { useGetDrinks, useGetPizzas, useGetSushi } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {
  const {
    data: productsPizza,
    isLoading: loadingPizza,
    error: errorPizza,
  } = useGetPizzas();

  const {
    data: productsSushi,
    isLoading: loadingSushi,
    error: errorSushi,
  } = useGetSushi();

  const {
    data: productsDrinks,
    isLoading: loadingDrinks,
    error: errorDrinks,
  } = useGetDrinks();

  return (
    <>
      <ProductTape
        title="Pizzas"
        products={productsPizza}
        isLoading={loadingPizza}
        error={errorPizza}
      />
      <ProductTape
        title="Sushi"
        products={productsSushi}
        isLoading={loadingSushi}
        error={errorSushi}
      />
      <ProductTape
        title="Drinks"
        products={productsDrinks}
        isLoading={loadingDrinks}
        error={errorDrinks}
      />
    </>
  );
};

export default MainPage;
