import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/auth";
import { openModal } from "../../store/actions/modal";
import { addNotification } from "../../store/actions/notification";
import { authIsLoginSelector, authUserSelector } from "../../store/selectors/auth";
import { IProps } from "../../typescript/interfaces/props";
import BaseButton from "../BaseButton";
import BaseLink from "../BaseLink";
import styles from './index.module.scss';

interface Props extends IProps { }

const Header: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector(authIsLoginSelector);
    const userData = useSelector(authUserSelector);

    const openCartModal = () => {
        dispatch(openModal('cart'))
    }

    const openRegistrationModal = () => {
        dispatch(openModal('registration'))
    }

    const openLoginModal = () => {
        dispatch(openModal('login'))
    }

    const logOut = () => {
        dispatch(logoutUser())
        dispatch(addNotification('You are logged out'))

    }

    return (
        <div className={styles.root}>
            <BaseLink to='/' >
                SIMPLE SHOP
            </BaseLink>
            {
                isLogin ?
                    <div className={styles.item}>
                        <BaseButton onClick={logOut} value={`${userData.name}: logout`} />
                    </div>
                    :
                    <div className={styles.item}>
                        <div className={styles.button}>
                            <BaseButton onClick={openRegistrationModal} value='Sign in' />

                        </div>
                        <div className={styles.button}>
                            <BaseButton onClick={openLoginModal} value='Login' />

                        </div>
                    </div>
            }
            <div className={styles.item}>
                <img className={styles.icon} onClick={openCartModal} src="assets/images/shoppingCArt.png" alt="shopping cart" />
            </div>

        </div>
    )
}

export default Header  