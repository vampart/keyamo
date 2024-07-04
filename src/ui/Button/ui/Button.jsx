import classNames from "classnames";
import cls from "./Button.module.scss";

const typeClasses = {
  clear: "clear",
  normal: "normal",
};

const Button = (props) => {
  const { children, className, type, active, border, onClick } = props;

  const typeClass = typeClasses[type] || typeClasses.normal;

  return (
    <button
      className={classNames(`button ${className}`, cls[typeClass], {
        [cls["active"]]: active,
        [cls["border"]]: border,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
