import classNames from "classnames";
import { FC } from "react";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  label?: string;
  onChange: () => void;
  checked: boolean;
}

const BaseCheckbox: FC<Props> = ({
  value,
  label,
  checked,
  className,
  onChange,
}): JSX.Element => {
  return (
    <label className={classNames(styles.root, className)}>
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default BaseCheckbox;
