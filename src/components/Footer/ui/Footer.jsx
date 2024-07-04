import cls from "./Footer.module.scss";
import { Icon } from "@/ui/Icon";
import LogoSvg from "@/assets/img/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.column}>
          <div className={cls.logo}>
            <Icon Svg={LogoSvg} clickable onClick={onClick} />

            <h3 className={cls.footerTitle}>Keyamo Delivery</h3>
          </div>

          <span className={cls.copyright}>
            © Copyright 2024 — Keyamo Delivery
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
