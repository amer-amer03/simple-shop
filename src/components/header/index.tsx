import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProps } from "../../interfaces/props";
import { logoutUser } from "../../store/actions/auth";
import { openModal } from "../../store/actions/modal";
import { addNotification } from "../../store/actions/notification";
import {
  authIsLoginSelector,
  authUserSelector,
} from "../../store/selectors/auth";
import { cartItemsQuantitySelector } from "../../store/selectors/cart";
import { ROUTES } from "../../utils/constants/urls";
import BaseButton from "../BaseButton";
import BaseLink from "../BaseLink";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

const Header: FC<IProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const isLogin = useSelector(authIsLoginSelector);
  const userData = useSelector(authUserSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);

  const openCartModal = () => {
    return dispatch(openModal("cart"));
  };

  const openRegistrationModal = () => {
    return dispatch(openModal("registration"));
  };

  const openLoginModal = () => {
    return dispatch(openModal("login"));
  };

  const logOut = () => {
    dispatch(logoutUser());
    dispatch(addNotification("You have logged out"));
  };

  return (
    <div className={styles.root}>
      <BaseLink to={ROUTES.home}>SIMPLE SHOP</BaseLink>
      {isLogin ? (
        <div className={styles.item}>
          <BaseButton onClick={logOut} value={`${userData.name}: logout`} />
        </div>
      ) : (
        <div className={styles.item}>
          <div className={styles.button}>
            <BaseButton onClick={openRegistrationModal} value="Sign in" />
          </div>
          <div className={styles.button}>
            <BaseButton onClick={openLoginModal} value="Login" />
          </div>
        </div>
      )}
      <div className={styles.item} onClick={openCartModal}>
        <div className={styles.cartItemsQuantity}>
          <BaseTypography value={cartItemsQuantity} />
        </div>
        <img
          className={styles.icon}
          src="assets/images/shoppingCArt.png"
          alt="shopping cart"
        />
      </div>
    </div>
  );
};

export default Header;
