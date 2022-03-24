import classNames from "classnames";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {}

const BaseTypography: React.FC<Props> = ({ value, className }) => {
  return <span className={classNames(styles.root, className)}>{value}</span>;
};

export default BaseTypography;
