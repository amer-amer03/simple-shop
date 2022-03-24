import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  label?: string;
  onChange: () => void;
  checked: boolean;
}

const BaseCheckbox: React.FC<Props> = ({ value, label, checked, onChange }) => {
  return (
    <label className={styles.root}>
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
