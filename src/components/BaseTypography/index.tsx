import { IProps } from '../../interfaces/props';
import styles from './index.module.scss';

interface Props extends IProps {
}

const BaseTypography: React.FC<Props> = ({ value }) => {
    return (
        <span className={styles.root}  >
            {value}
        </span>
    )
}

export default BaseTypography;
