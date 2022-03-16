import { IProps } from "../../interfaces/props";
import styles from './index.module.scss';

interface Props extends IProps {
    label?: string;
}

const BaseCheckbox: React.FC<Props> = ({ value, label }) => {
    return (
        <label className={styles.root}>
            <input type="checkbox" value={value} />
            {label}
        </label>
    )
}

export default BaseCheckbox