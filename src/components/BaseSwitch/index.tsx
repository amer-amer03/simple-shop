import { IProps } from "../../interfaces/props";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

interface Props extends IProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const BaseSwitch: React.FC<Props> = ({
  checked,
  label,
  onChange,
}): JSX.Element => {
  return (
    <>
      <BaseTypography value={label} />
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={styles.slider} />
      </label>
    </>
  );
};

export default BaseSwitch;
