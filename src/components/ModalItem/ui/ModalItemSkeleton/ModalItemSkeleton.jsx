import { Skeleton } from "@/ui/Skeleton";
import cls from "@/layouts/ModalItemLayout/ui/ModalItemLayout.module.scss";

const ModalItemSkeleton = () => {
  return (
    <div className={cls.body}>
      <Skeleton className={cls.img} width={450} height={450} />

      <div className={cls.content}>
        <Skeleton className={cls.title} width={250} height={25} />

        <div className={cls.options}>
          <div className={cls.block}>
            <Skeleton width={100} height={35} />

            <div className={cls.item}>
              <Skeleton width={280} height={50} />
              <Skeleton width={280} height={50} />
            </div>
          </div>

          <div className={cls.block}>
            <Skeleton width={100} height={35} />

            <div className={cls.item}>
              <Skeleton width={280} height={50} />
              <Skeleton width={280} height={50} />
            </div>
          </div>

          <div className={cls.footer}>
            <Skeleton className={cls.price} width={125} height={30} />

            <Skeleton className={cls.button} width={155} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalItemSkeleton };
