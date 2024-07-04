import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import {
  getProductItemPizzaSize,
  getProductItemPizzaType,
} from "@/redux/productItem/selectors/productItemSelectors";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { Button } from "@/ui/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./../ModalItem/ModalItem.module.scss";
import { useModalItemParams } from "../ModalItem/helper/useModalItemParams";

const ModalItemPizza = (props) => {
  const { isOpen, product, price } = props;

  const dispatch = useDispatch();

  const params = useModalItemParams();

  const pizzaSize = useSelector(getProductItemPizzaSize);
  const pizzaType = useSelector(getProductItemPizzaType);

  useEffect(() => {
    if (isOpen) {
      dispatch(productActions.setClear());
      if (productsName.PIZZA === product.product && isOpen) {
        dispatch(productActions.setSize(product.sizes[0]));
        dispatch(productActions.setType(product.doughs[0]));
      }
    }
  }, [dispatch, isOpen, product]);

  useEffect(() => {
    if (
      productsName.PIZZA === product.product &&
      isOpen &&
      pizzaType &&
      pizzaSize
    ) {
      dispatch(productActions.setPrice(pizzaSize.price + pizzaType.price));
    }
  }, [dispatch, isOpen, product, pizzaSize, pizzaType]);

  const handleClickSize = (size) => {
    dispatch(productActions.setSize(size));
  };

  const handleClickType = (type) => {
    dispatch(productActions.setType(type));
  };

  const options = (
    <div className={cls.options}>
      <div className={cls.block}>
        <p>Тип теста</p>

        <div className={cls.item}>
          {product.doughs.map((type, i) => {
            return (
              <Button
                border
                type={"clear"}
                key={i}
                active={pizzaType === type}
                onClick={() => handleClickType(type)}
              >
                {type.name}
              </Button>
            );
          })}
        </div>
      </div>

      <div className={cls.block}>
        <p>Размеры</p>

        <div className={cls.item}>
          {product.sizes.map((size, i) => {
            return (
              <Button
                border
                type={"clear"}
                key={i}
                active={pizzaSize === size}
                onClick={() => handleClickSize(size)}
              >
                {size.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const newParams = {
    ...params,
    size: pizzaSize?.name,
    type: pizzaType?.name,
  };

  return <ModalItemLayout price={price} params={newParams} options={options} />;
};

export { ModalItemPizza };
