import classNames from "classnames";
import { FC, MouseEvent } from "react";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  type?: "submit" | "button";
}

const BaseButton: FC<Props> = ({
  value,
  className,
  type = "button",
  onClick = () => null,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default BaseButton;
