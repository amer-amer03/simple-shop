import classNames from "classnames";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "button";
}

const BaseButton: React.FC<Props> = ({
  value,
  className,
  type = "submit",
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
