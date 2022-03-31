import classNames from "classnames";
import { FC } from "react";
import { IProps } from "../../interfaces/props";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

interface Props extends IProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const BaseSwitch: FC<Props> = ({
  checked,
  label,
  className,
  onChange,
}): JSX.Element => {
  return (
    <div className={classNames(styles.root, className)}>
      <BaseTypography className={styles.label} value={label} />
      <label className={classNames(styles.switch)}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={styles.slider} />
      </label>
    </div>
  );
};

export default BaseSwitch;
