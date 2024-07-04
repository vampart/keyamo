import { productsName } from "@/const/const";
import { getProductItemSushiPieces } from "@/redux/productItem/selectors/productItemSelectors";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./../ModalItem/ModalItem.module.scss";
import { Button } from "@/ui/Button";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { useModalItemParams } from "../ModalItem/helper/useModalItemParams";

const ModalItemSushi = (props) => {
  const { isOpen, product, price } = props;

  const dispatch = useDispatch();

  const params = useModalItemParams();

  const sushiPieces = useSelector(getProductItemSushiPieces);

  useEffect(() => {
    if (isOpen) {
      dispatch(productActions.setClear());
      if (productsName.SUSHI === product.product) {
        dispatch(productActions.setPieces(product.pieces[0]));
      }
    }
  }, [dispatch, isOpen, product]);

  useEffect(() => {
    if (productsName.SUSHI === product.product && isOpen && sushiPieces) {
      dispatch(productActions.setPrice(sushiPieces.price));
    }
  }, [dispatch, isOpen, product, sushiPieces]);

  const handleClickPieces = (pieces) => {
    dispatch(productActions.setPieces(pieces));
  };

  const options = (
    <div className={cls.options}>
      <div className={cls.block}>
        <p>Количество суши</p>

        <div className={cls.item}>
          {product.pieces.map((type, i) => {
            return (
              <Button
                border
                type={"clear"}
                key={i}
                active={sushiPieces === type}
                onClick={() => handleClickPieces(type)}
              >
                {type.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const newParams = {
    ...params,
    pieces: sushiPieces?.name,
  };

  return <ModalItemLayout price={price} params={newParams} options={options} />;
};

export { ModalItemSushi };
