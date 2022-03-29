import { TFunction, useTranslation } from "react-i18next";
import { FC, FormEvent } from "react";
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
import { Action } from "@reduxjs/toolkit";
import BaseSelect from "../BaseSelect";
import { IOption } from "../../interfaces/options";

const langOptions: IOption[] = [
  { value: "en", label: "English" },
  { value: "uk", label: "Українська" },
];

const Header: FC<IProps> = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const isLogin = useSelector(authIsLoginSelector);
  const userData = useSelector(authUserSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);

  const openCartModal = (): Action => {
    return dispatch(openModal("cart"));
  };

  const openRegistrationModal = (): Action => {
    return dispatch(openModal("registration"));
  };

  const openLoginModal = (): Action => {
    return dispatch(openModal("login"));
  };

  const logOut = () => {
    dispatch(logoutUser());
    dispatch(addNotification("You have logged out"));
  };

  const changeLanguage = (
    e: FormEvent<HTMLSelectElement>
  ): Promise<TFunction> => {
    let value = e.currentTarget.value;
    return i18n.changeLanguage(value.toString());
  };

  return (
    <div className={styles.root}>
      <BaseLink className={styles.item} to={ROUTES.home}>
        SIMPLE SHOP
      </BaseLink>

      <BaseSelect
        className={styles.item}
        onChange={changeLanguage}
        options={langOptions}
      />
      {isLogin && (
        <div className={styles.item}>
          <BaseButton onClick={logOut} value={`${userData.name}: logout`} />
        </div>
      )}

      {!isLogin && (
        <div className={styles.item}>
          <BaseButton
            onClick={openRegistrationModal}
            value={t<string>("header.registration")}
          />
          <div className={styles.item}>
            <BaseButton
              onClick={openLoginModal}
              value={t<string>("header.login")}
            />
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
