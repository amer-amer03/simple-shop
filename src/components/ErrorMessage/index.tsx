import { IProps } from '../../typescript/interfaces/props';
import BaseTypography from '../BaseTypography';
import styles from './index.module.scss';


interface Props extends IProps {
    value: string | undefined;
}

const ErrorMessage: React.FC<Props> = ({ value }) => {
    return (
        <div className={styles.root}>
            <BaseTypography className={styles.text} value={value} />
        </div>
    );
};

export default ErrorMessage;
