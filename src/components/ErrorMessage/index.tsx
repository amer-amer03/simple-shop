import { FC } from "react";
import { IProps } from "../../interfaces/props";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

interface Props extends IProps {
  value: string | undefined;
}

const ErrorMessage: FC<Props> = ({ value }): JSX.Element => {
  return (
    <div className={styles.root}>
      <BaseTypography className={styles.text} value={value} />
    </div>
  );
};

export default ErrorMessage;
