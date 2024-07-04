/* eslint-disable no-case-declarations */
import { Link } from "react-router-dom";
import cls from "./ProductLayout.module.scss";
import { CartItemSkeleton } from "@/components/CartItem";

export const ProductLayoutSkeleton = () => {
  return (
    <section className={cls.section}>
      <div className={cls.content}>
        {new Array(4).fill(0).map((_, i) => (
          <CartItemSkeleton key={i} />
        ))}
      </div>
    </section>
  );
};

const ProductLayout = (props) => {
  const { header, item } = props;
  return (
    <>
      <Link className={cls.link} to={"/"}>
      Come Back
      </Link>

      <section className={cls.section}>
        <h3 className={cls.header}>{header}</h3>

        <div className={cls.content}>{item}</div>
      </section>
    </>
  );
};

export { ProductLayout };
