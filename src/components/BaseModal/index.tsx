import classNames from "classnames";
import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { IProps } from "../../interfaces/props";
import { hideModal } from "../../store/actions/modal";
import Close from "../icons/Close";
import styles from "./index.module.scss";

interface Props extends IProps {
  title?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
}

const BaseModal: FC<Props> = ({ title, body, footer, className }) => {
  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(hideModal());
  };
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.button} onClick={handleHideModal}>
        <Close />
      </div>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>{body}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default BaseModal;
