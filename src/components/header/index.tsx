import { useDispatch, useSelector } from "react-redux";
import { IProps } from "../../interfaces/props";
import { logoutUser } from "../../store/actions/auth";
import { openModal } from "../../store/actions/modal";
import { addNotification } from "../../store/actions/notification";
import { authIsLoginSelector, authUserSelector } from "../../store/selectors/auth";
import { cartItemsQuantitySelector } from "../../store/selectors/cart";
import BaseButton from "../BaseButton";
import BaseLink from "../BaseLink";
import BaseTypography from "../BaseTypography";
import styles from './index.module.scss';

interface Props extends IProps { }

const Header: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector(authIsLoginSelector);
    const userData = useSelector(authUserSelector);
    const cartItemsQuantity = useSelector(cartItemsQuantitySelector);

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
        dispatch(addNotification('You have logged out'))
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
            <div className={styles.item} onClick={openCartModal}>
                <div className={styles.cartItemsQuantity}>
                    <BaseTypography value={cartItemsQuantity} />
                </div>
                <img className={styles.icon} src="assets/images/shoppingCArt.png" alt="shopping cart" />
            </div>

        </div>
    )
}

export default Header  