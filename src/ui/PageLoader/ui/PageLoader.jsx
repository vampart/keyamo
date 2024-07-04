import cls from "./PageLoader.module.scss";

const PageLoader = () => {
  return (
    <div className={cls.pageLoader}>
      <div className="lds-hourglass"></div>
    </div>
  );
};

export { PageLoader };
