import { FC, useEffect } from "react"
import Registration from "../Registration";
import Login from "../Login";
import { IProps } from "../../typescript/interfaces/props";
import { useDispatch } from "react-redux";
import styles from './index.module.scss';
import { hideModal } from "../../store/actions/modal";
import Cart from "../Cart";

interface Props extends IProps {
    setModalOpenType: React.Dispatch<React.SetStateAction<string>>;
    openModalType: string
}
const ModalContent: FC<Props> = ({ setModalOpenType, openModalType, children, ...props }) => {
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

    return (
        <div className={styles.root} {...props}>
            <button onClick={handleHideModal}>
                close modal
            </button>
            {modalContent(openModalType)}
        </div>
    )
}

export default ModalContent