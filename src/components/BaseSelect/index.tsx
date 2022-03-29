import { FC, FormEvent } from "react";
import { IOption } from "../../interfaces/options";
import { IProps } from "../../interfaces/props";
import styles from "./index.module.scss";

interface Props extends IProps {
  options: IOption[];
  onChange: (e: FormEvent<HTMLSelectElement>) => void;
}
const BaseSelect: FC<Props> = ({ options, onChange }): JSX.Element => {
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
