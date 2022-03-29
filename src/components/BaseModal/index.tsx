import { Action } from "@reduxjs/toolkit";
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
  onClose?: () => void;
}

const BaseModal: FC<Props> = ({
  title,
  body,
  footer,
  className,
  onClose,
}): JSX.Element => {
  const dispatch = useDispatch();

  const handleHideModal = (): Action => {
    return dispatch(hideModal());
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div
        className={styles.button}
        onClick={onClose ? onClose : handleHideModal}
      >
        <Close />
      </div>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>{body}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default BaseModal;
