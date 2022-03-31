import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { IProps } from "../../interfaces/props";
import Cart from "../Cart";
import Check from "../Check";
import Login from "../Login";
import Registration from "../Registration";
import styles from "./index.module.scss";

interface Props extends IProps {
  modalOpenType: string;
  theme: string;
}

const Modal: FC<Props> = ({ modalOpenType, theme }): JSX.Element | null => {
  useEffect(() => {
    if (modalOpenType) document.body.style.overflow = "hidden";
    if (!modalOpenType) document.body.style.overflow = "auto";
  }, [modalOpenType]);

  const modalContent = (openModalType: string) => {
    switch (openModalType) {
      case "registration":
        return <Registration />;
      case "login":
        return <Login />;
      case "cart":
        return <Cart />;
      case "check":
        return <Check />;
      default:
        return null;
    }
  };

  if (!modalOpenType) return null;

  return createPortal(
    <div className={styles.root} data-theme={theme}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}></div>
        <div className={styles.body}>{modalContent(modalOpenType)}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
