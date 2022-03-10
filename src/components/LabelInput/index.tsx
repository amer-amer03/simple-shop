import { ChangeEvent } from "react";
import { IProps } from "../../typescript/interfaces/props";
import BaseInput from "../BaseInput"
import BaseTypography from "../BaseTypography";
import styles from './index.module.scss';

interface Props extends IProps {
    type?: string;
    placeholder?: string;
    label?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput: React.FC<Props> = ({ className, label, ...props }) => {
    return (
        <div className={styles.root}>
            <BaseTypography className={styles.label} value={label} />
            <div {...props} >
                <BaseInput className={styles.input} {...props} />
            </div>
        </div>
    )
}

export default LabelInput;
