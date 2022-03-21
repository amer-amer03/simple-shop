import { ChangeEvent } from "react";
import { IProps } from "../../interfaces/props";
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

const LabelInput: React.FC<Props> = ({ label }) => {
    return (
        <div className={styles.root}>
            <BaseTypography className={styles.label} value={label} />
            <div>
                <BaseInput className={styles.input} />
            </div>
        </div>
    )
}

export default LabelInput;
