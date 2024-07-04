import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { LayoutContext } from "@/provider/LayoutContextProvider";
import {
  getDrinks,
  getDrinksErrors,
  getDrinksLoading,
} from "@/redux/drinks/selectors/drinksSelectors";
import { fetchNextDrinksPage } from "@/redux/drinks/services/fetchNextDrinksPage";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const DrinksPage = () => {
  const Drinks = useSelector(getDrinks);
  const error = useSelector(getDrinksErrors);
  const loading = useSelector(getDrinksLoading);
  const dispatch = useDispatch();
  const { handleClick } = useContext(LayoutContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    dispatch(fetchNextDrinksPage());
  }, [dispatch, inView]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  const item = Drinks.map((drink) => {
    return (
      <CartItem
        key={drink.id}
        id={drink.id}
        photo={drink.photo}
        name={drink.name}
        product={drink.product}
        description={drink.description}
        price={drink.price}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"Drinks"} item={item} />
      {loading && <ProductLayoutSkeleton />}
      {!loading && <div ref={ref}></div>}
    </>
  );
};

export default DrinksPage;
