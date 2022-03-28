import classNames from "classnames";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

const BaseTypography: React.FC<IProps> = ({ value, className }) => {
  return <span className={classNames(styles.root, className)}>{value}</span>;
};

export default BaseTypography;
