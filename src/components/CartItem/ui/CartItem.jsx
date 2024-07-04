import { Button } from "@/ui/Button";
import cls from "./CartItem.module.scss";
import { productsName } from "@/const/const";
import { useDispatch } from "react-redux";
import { fetchProductItem } from "@/redux/productItem/services/fetchProductItem";

const CartItem = ({
  id,
  photo = "",
  name = "",
  product = "",
  ingredients = [],
  description = "",
  price = 0,
  handleClick,
}) => {
  const ingredientsInfo = ingredients.join(", ");

  const dispatch = useDispatch();

  const onClick = () => {
    handleClick();
    dispatch(
      fetchProductItem({
        id: id,
        product: product,
      })
    );
  };

  return (
    <article className={cls.card}>
      <img src={photo} alt="photo" className={cls.img} />

      <div className={cls.body}>
        <div className={cls.info}>
          <p className={cls.title}>{name}</p>

          <span className={cls.text}>
            {product === productsName.DRINKS ? description : ingredientsInfo}
          </span>
        </div>

        <div className={cls.footer}>
          <Button onClick={onClick} border className={cls.button}>
          Choose
          </Button>
          <span>От {price} Р</span>
        </div>
      </div>
    </article>
  );
};

export { CartItem };
