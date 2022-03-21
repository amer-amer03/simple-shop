import { FC, useEffect } from "react"
import { createPortal } from "react-dom"
import { IProps } from "../../interfaces/props";
import Cart from "../Cart";
import Login from "../Login";
import Registration from "../Registration";
import styles from './index.module.scss';

interface Props extends IProps {
    modalOpenType: string;
}

const Modal: FC<Props> = ({ modalOpenType }) => {

    useEffect(() => {
        if (modalOpenType) document.body.style.overflow = 'hidden'
        if (!modalOpenType) document.body.style.overflow = 'auto'
    }, [modalOpenType])

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

                </div>
                <div className={styles.body}>
                    {modalContent(modalOpenType)}
                </div>
            </div>
        </div>
        , document.body)
}

export default Modal