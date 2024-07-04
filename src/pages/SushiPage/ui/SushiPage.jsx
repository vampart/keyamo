import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { LayoutContext } from "@/provider/LayoutContextProvider";
import {
  getSushi,
  getSushiErrors,
  getSushiLoading,
} from "@/redux/sushi/selectors/sushiSelectors";
import { fetchNextSushiPage } from "@/redux/sushi/services/fetchNextSushiPage";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const SushiPage = () => {
  const sushi = useSelector(getSushi);
  const error = useSelector(getSushiErrors);
  const loading = useSelector(getSushiLoading);
  const dispatch = useDispatch();
  const { handleClick } = useContext(LayoutContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    dispatch(fetchNextSushiPage());
  }, [dispatch, inView]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  const item = sushi.map((roll) => {
    const prices = roll.pieces.map((el) => el.price);
    const minPrice = Math.min(...prices);

    return (
      <CartItem
        key={roll.id}
        id={roll.id}
        photo={roll.photo}
        name={roll.name}
        product={roll.product}
        ingredients={roll.ingredients}
        price={minPrice}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"Суши"} item={item} />
      {loading && <ProductLayoutSkeleton />}
      {!loading && <div ref={ref}></div>}
    </>
  );
};

export default SushiPage;
