import classNames from "classnames";
import { IProps } from "../../typescript/interfaces/props";
import styles from './index.module.scss';

interface Props extends IProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    type?: 'submit' | 'button'
}

const BaseButton: React.FC<Props> = ({ value, className, type = 'submit', ...props }) => {
    return (
        <button type={type} className={classNames(styles.button, className)}  {...props}>
            {value}
        </button>
    )
}

export default BaseButton;
