import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/modal";
import { IProps } from "../../typescript/interfaces/props";
import BaseButton from "../BaseButton";
import BaseLink from "../BaseLink";
import styles from './index.module.scss';

interface Props extends IProps { }

const Header: React.FC<Props> = () => {

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


    const isLogin = localStorage.getItem('isLogin');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const logOut = () => {
        localStorage.setItem('isLogin', "false")
    }

    return (
        <div className={styles.root}>
            <BaseLink to='/' >
                SIMPLE SHOP
            </BaseLink>
            {
                isLogin === 'true' ?
                    <div className={styles.item}>
                        <BaseButton onClick={logOut} value={`${user.name}: logout`} />
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