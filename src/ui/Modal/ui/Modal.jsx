import classNames from "classnames";
import ReactModal from "react-modal";
import cls from "./Modal.module.scss";
import {  useLayoutEffect, useState } from "react";

ReactModal.setAppElement("#root");

const typeClasses = {
  rightModal: "rightModal",
  normal: "modal",
};

const Modal = (props) => {
  const { isOpen, children, type, width, height, border, scroll, setIsOpen } =
    props;

  const typeClass = typeClasses[type] || typeClasses.normal;

  const [closing, setIsClosing] = useState(false);

  useLayoutEffect(() => {
    if (!isOpen) {
      setIsClosing(true);
    } else {
      setIsClosing(false);
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal
      style={{
        content: {
          maxWidth: width,
          maxHeight: height,
          borderRadius: border,
          overflowY: scroll,
        },
      }}
      className={classNames(cls.animate, cls[typeClass], {
        [cls.closing]: closing,
      })}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      htmlOpenClassName={cls.modalOpen}
      overlayClassName={cls.overlay}
      closeTimeoutMS={300}
      onRequestClose={closeModal}
      parentSelector={() => document.querySelector("#app")}
    >
      {children}
      <button className={cls.close} onClick={closeModal}></button>
    </ReactModal>
  );
};

export { Modal };
