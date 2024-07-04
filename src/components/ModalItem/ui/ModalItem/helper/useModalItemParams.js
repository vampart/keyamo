import { getProductItem } from "@/redux/productItem/selectors/productItemSelectors";
import { useSelector } from "react-redux";

export const useModalItemParams = () => {
  const product = useSelector(getProductItem);

  return {
    id: product.id,
    product: product.product,
    name: product.name,
    photo: product.photo,
    count: 1,
  };
};
