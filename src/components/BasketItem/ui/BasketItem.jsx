import { productsName } from "@/const/const";
import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { Button } from "@/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import cls from "./BasketItem.module.scss";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import basketImg from "@/assets/img/basket.png";

const BasketItem = () => {
  const basket = useSelector(getBasketItems);

  const dispatch = useDispatch();

  const uniqueKey = (product) => {
    switch (product.product) {
      case productsName.PIZZA:
        return `${product.product} - ${product.id} - ${product.size} - ${product.type} - ${product.price}`;
      case productsName.SUSHI:
        return `${product.product} - ${product.id} - ${product.pieces} - ${product.price}`;
      case productsName.DRINKS:
        return `${product.product} - ${product.id} - ${product.price}`;
      default:
        return null;
    }
  };

  const description = (product) => {
    switch (product.product) {
      case productsName.PIZZA:
        return (
          <span>
            {product.type} Product, {product.size}
          </span>
        );

      case productsName.SUSHI:
        return <span>Product Price - {product.pieces}</span>;

      case productsName.DRINKS:
        return null;

      default:
        return null;
    }
  };

  const item = basket.map((el) => (
    <div key={uniqueKey(el)} className={cls.body}>
      <img src={el.photo} className={cls.image} />

      <div className={cls.content}>
        <div className={cls.main}>
          <p>{el.name}</p>
          {description(el)}
        </div>

        <div className={cls.footer}>
          <div className={cls.count}>
            <Button
              onClick={() => {
                dispatch(basketActions.minusItem(el));
              }}
              type={"clear"}
              className={cls.button}
            >
              -
            </Button>
            <span>{el.count}</span>
            <Button
              onClick={() => {
                dispatch(basketActions.addItem(el));
              }}
              type={"clear"}
              className={cls.button}
            >
              +
            </Button>
          </div>

          <span>{el.price * el.count} ₽</span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className={cls.basketContent}>
        <h2>Your Cart</h2>

        {item}
      </div>
      {!basket.length && (
        <div className={cls.empty}>
          <h3>Your item will be listed here</h3>
          <img src={basketImg} />
        </div>
      )}
    </>
  );
};

export { BasketItem };
