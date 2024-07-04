import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalItemParams } from "../ModalItem/helper/useModalItemParams";

const ModalItemDrinks = (props) => {
  const { isOpen, product, price } = props;

  const dispatch = useDispatch();

  const params = useModalItemParams();

  useEffect(() => {
    if (isOpen) {
      dispatch(productActions.setClear());
    }
  }, [dispatch, isOpen, product]);

  useEffect(() => {
    if (productsName.DRINKS === product.product && isOpen) {
      dispatch(productActions.setPrice(product.price));
    }
  }, [dispatch, isOpen, product]);

  return <ModalItemLayout price={price} params={params} />;
};

export { ModalItemDrinks };
