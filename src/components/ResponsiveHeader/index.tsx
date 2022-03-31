import { Action } from "@reduxjs/toolkit";
import { FC, FormEvent } from "react";
import { TFunction, useTranslation } from "react-i18next";
import { IUserData } from "../../interfaces/auth";
import { IOption } from "../../interfaces/options";
import { IProps } from "../../interfaces/props";
import BaseButton from "../BaseButton";
import BaseSelect from "../BaseSelect";
import BaseSwitch from "../BaseSwitch";
import Close from "../icons/Close";
import styles from "./index.module.scss";

interface Props extends IProps {
  menuIsOpen: boolean;
  langOptions: IOption[];
  isLogin: boolean;
  userData: IUserData;
  isDarkTheme: boolean;
  cartItemsQuantity: number;
  onToggleTheme: () => Action;
  openCartModal: () => Action;
  logOut: () => void;
  changeLanguage: (e: FormEvent<HTMLSelectElement>) => Promise<TFunction>;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openRegistrationModal: () => Action;
  openLoginModal: () => Action;
}

const ResponsiveHeader: FC<Props> = ({
  menuIsOpen,
  langOptions,
  isLogin,
  userData,
  isDarkTheme,
  cartItemsQuantity,
  onToggleTheme,
  openCartModal,
  logOut,
  changeLanguage,
  setMenuIsOpen,
  openRegistrationModal,
  openLoginModal,
}): JSX.Element | null => {
  const { t, i18n } = useTranslation();
  if (!menuIsOpen) return null;

  return (
    <div className={styles.root}>
      <div className={styles.closeButton} onClick={() => setMenuIsOpen(false)}>
        <Close />
      </div>
      <div className={styles.items}>
        <div>
          <BaseSelect
            className={styles.item}
            onChange={changeLanguage}
            defaultValue={i18n.language}
            options={langOptions}
          />
        </div>

        {isLogin && (
          <div className={styles.item}>
            <BaseButton onClick={logOut}>
              {`${userData.name}: ${t<string>("header.logout")}`}
            </BaseButton>
          </div>
        )}

        {!isLogin && (
          <div className={styles.item}>
            <BaseButton onClick={openRegistrationModal}>
              {t<string>("header.registration")}
            </BaseButton>
            <div className={styles.item}>
              <BaseButton onClick={openLoginModal}>
                {t<string>("header.login")}
              </BaseButton>
            </div>
          </div>
        )}
        <div className={styles.cart}>
          <BaseButton onClick={openCartModal}>
            {`${t<string>("cart.cart")}  (${cartItemsQuantity})`}
          </BaseButton>
        </div>
        <div className={styles.item}>
          <BaseSwitch
            className={styles.switch}
            label={t<string>("catalog.toggleTheme")}
            checked={isDarkTheme}
            onChange={onToggleTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
