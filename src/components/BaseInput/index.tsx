import classNames from "classnames";
import { ChangeEvent, FC } from "react";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const BaseInput: FC<Props> = ({
  placeholder,
  className,
  type = "text",
}): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(styles.baseInput, className)}
    />
  );
};
export default BaseInput;
