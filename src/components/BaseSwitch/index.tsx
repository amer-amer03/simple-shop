import { IProps } from '../../interfaces/props';
import styles from './index.module.scss';

interface Props extends IProps {
    checked: boolean
    onChange: () => void
}

const BaseSwitch: React.FC<Props> = ({ checked, onChange }) => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className={styles.slider}></span>
        </label>
    )
}

export default BaseSwitch