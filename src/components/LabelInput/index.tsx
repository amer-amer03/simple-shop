import { ChangeEvent, FC } from "react";
import { IProps } from "../../interfaces/props";
import BaseInput from "../BaseInput";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

interface Props extends IProps {
  type?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput: FC<Props> = ({ className, label, ...props }): JSX.Element => {
  return (
    <div className={styles.root}>
      <BaseTypography className={styles.label} value={label} />
      <div {...props}>
        <BaseInput className={styles.input} {...props} />
      </div>
    </div>
  );
};

export default LabelInput;
