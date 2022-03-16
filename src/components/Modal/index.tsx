import { FC } from "react"
import { createPortal } from "react-dom"
import { useDispatch } from "react-redux";
import { IProps } from "../../interfaces/props";
import { hideModal } from "../../store/actions/modal";
import BaseTypography from "../BaseTypography";
import Cart from "../Cart";
import Close from "../icons/Close";
import Login from "../Login";
import Registration from "../Registration";
import styles from './index.module.scss';

interface Props extends IProps {
    modalOpenType: string;
}

const Modal: FC<Props> = ({ modalOpenType, children, ...props }) => {

    const dispatch = useDispatch()

    const handleHideModal = () => {
        dispatch(hideModal())
    }

    const modalContent = (openModalType: string) => {
        switch (openModalType) {
            case 'registration':
                return <Registration />
            case 'login':
                return <Login />
            case 'cart':
                return <Cart />
            default:
                return null
        }
    }

    if (!modalOpenType) return null

    return createPortal(
        <div className={styles.root} >
            <div className={styles.modalContent} >
                <div className={styles.modalHeader}>
                    <BaseTypography className={styles.title} value={modalOpenType} />
                    <button className={styles.button} onClick={handleHideModal}>
                        <Close />
                    </button>
                </div>
                <div className={styles.body}>
                    {modalContent(modalOpenType)}

                </div>
            </div>
        </div>
        , document.body)
}

export default Modal