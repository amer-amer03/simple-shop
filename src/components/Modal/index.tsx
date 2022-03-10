import { FC } from "react"
import { createPortal } from "react-dom"
import { IProps } from "../../typescript/interfaces/props";
import styles from './index.module.scss';

interface Props extends IProps {
    modalOpenType: string;
}

const Modal: FC<Props> = ({ modalOpenType, children, ...props }) => {

    if (!modalOpenType) return null

    return createPortal(
        <div className={styles.root} {...props}>
            <div>
                {children}
            </div>
        </div>
        , document.body)
}

export default Modal