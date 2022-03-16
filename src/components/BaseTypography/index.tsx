import { IProps } from '../../interfaces/props';
import styles from './index.module.scss';

interface Props extends IProps {

}

const BaseTypography: React.FC<Props> = ({ value, ...props }) => {
    return (
        <span className={styles.root} {...props}>
            {value}
        </span>
    )
}

export default BaseTypography;
