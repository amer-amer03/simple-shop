import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/modal";
import BaseButton from "../BaseButton";
import styles from './index.module.scss';

const Header = () => {

    const dispatch = useDispatch()

    const openCartModal = () => {
        dispatch(openModal('cart'))
    }

    const openRegistrationModal = () => {
        dispatch(openModal('registration'))
    }

    const openLoginModal = () => {
        dispatch(openModal('login'))
    }

    return (
        <div className={styles.root}>
            <BaseButton onClick={openRegistrationModal} value='Sign in' />
            <BaseButton onClick={openLoginModal} value='Login' />

            <BaseButton onClick={openCartModal} value='open cart' />
        </div>
    )
}

export default Header  