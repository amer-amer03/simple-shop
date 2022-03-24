import classNames from "classnames";
import { ChangeEvent } from "react";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const BaseInput: React.FC<Props> = ({
  placeholder,
  className,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(styles.baseInput, className)}
    />
  );
};
export default BaseInput;
