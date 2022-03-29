import { IOption } from "../../interfaces/options";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  options: IOption[];
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}
const BaseSelect: React.FC<Props> = ({ options, onChange }): JSX.Element => {
  return (
    <select className={styles.root} onChange={(e) => onChange(e)}>
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value} label={item.label} />
        );
      })}
    </select>
  );
};

export default BaseSelect;
