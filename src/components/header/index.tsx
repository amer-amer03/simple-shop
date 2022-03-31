import { TFunction, useTranslation } from "react-i18next";
import { FC, FormEvent, useState } from "react";
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
import { Action } from "@reduxjs/toolkit";
import BaseSelect from "../BaseSelect";
import { IOption } from "../../interfaces/options";
import { toggleTheme } from "../../store/actions/theme";
import BaseSwitch from "../BaseSwitch";
import { isDarkThemeSelector } from "../../store/selectors/theme";
import HamburgerMenu from "../icons/HamburgerMenu";
import ResponsiveHeader from "../ResponsiveHeader";
import styles from "./index.module.scss";

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
  const isDarkTheme = useSelector(isDarkThemeSelector);

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

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
    dispatch(addNotification(t<string>("notifications.logout")));
  };

  const changeLanguage = (
    e: FormEvent<HTMLSelectElement>
  ): Promise<TFunction> => {
    let value = e.currentTarget.value;
    return i18n.changeLanguage(value.toString());
  };

  const onToggleTheme = (): Action => {
    return dispatch(toggleTheme());
  };

  return (
    <div className={styles.root}>
      <BaseLink className={styles.item} to={ROUTES.home}>
        <BaseTypography value="SIMPLE SHOP" />
      </BaseLink>
      {!menuIsOpen && (
        <div onClick={() => setMenuIsOpen(true)} className={styles.burgerMenu}>
          <HamburgerMenu />
        </div>
      )}
      <ResponsiveHeader
        menuIsOpen={menuIsOpen}
        langOptions={langOptions}
        isLogin={isLogin}
        userData={userData}
        isDarkTheme={isDarkTheme}
        cartItemsQuantity={cartItemsQuantity}
        openCartModal={openCartModal}
        onToggleTheme={onToggleTheme}
        logOut={logOut}
        setMenuIsOpen={setMenuIsOpen}
        changeLanguage={changeLanguage}
        openRegistrationModal={openRegistrationModal}
        openLoginModal={openLoginModal}
      />

      <div className={styles.items}>
        <BaseSelect
          className={styles.item}
          onChange={changeLanguage}
          defaultValue={i18n.language}
          options={langOptions}
        />
        {isLogin && (
          <div className={styles.item}>
            <BaseButton
              onClick={logOut}
              value={`${userData.name}: ${t<string>("header.logout")}`}
            />
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
        <BaseSwitch
          label={t<string>("catalog.toggleTheme")}
          checked={isDarkTheme}
          onChange={onToggleTheme}
        />
        <div className={styles.item} onClick={openCartModal}>
          <div className={styles.cartItemsQuantity}>
            <BaseTypography value={cartItemsQuantity} />
          </div>
          <img className={styles.icon} alt="shopping cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
