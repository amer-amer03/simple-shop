import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect } from "react";
import { setCartTotal } from "../../store/actions/cart";
import { Action } from "@reduxjs/toolkit";
import { IProps } from "../../interfaces/props";
import { hideModal, openModal } from "../../store/actions/modal";
import {
  cartDataSelector,
  cartTotalPriceSelector,
} from "../../store/selectors/cart";
import BaseButton from "../BaseButton";
import BaseModal from "../BaseModal";
import BaseTypography from "../BaseTypography";
import CartItem from "../CartItem";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { ICatalogDataResults } from "../../interfaces/catalog";

const Cart: FC<IProps> = (): JSX.Element => {
  const { t } = useTranslation();
  const cartData = useSelector(cartDataSelector);
  const cartTotalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    let cartTotal = 0;
    const total = cartData.reduce(
      (previousValue, item) =>
        previousValue + (item.totalPrice ? item.totalPrice : 0),
      cartTotal
    );
    dispatch(setCartTotal(total));
  }, [cartData, dispatch]);

  const handleCloseModal = (): Action => {
    return dispatch(hideModal());
  };

  const finalizePurchase = (): Action => {
    return dispatch(openModal("check"));
  };

  const cartBody = cartData.map((item: ICatalogDataResults, index: number) => {
    return <CartItem key={item.id} item={item} index={index} />;
  });

  const cartFooter = (
    <div className={styles.footer}>
      <div className={styles.total}>
        <BaseTypography
          value={`${t<string>("cart.total")}: ${cartTotalPrice} ₴`}
        />
        <div></div>
        <BaseButton onClick={finalizePurchase}>
          {t<string>("cart.finalizePurchase")}
        </BaseButton>
      </div>
    </div>
  );

  const cartBodyEmpty = (
    <div className={styles.emptyCartText}>
      <BaseTypography value={t<string>("cart.noItems")} />
    </div>
  );

  const cartFooterEmpty = (
    <div className={styles.emptyCartButton}>
      <BaseButton onClick={handleCloseModal}>
        {t<string>("cart.continueShopping")}
      </BaseButton>
    </div>
  );

  return (
    <div>
      <div className={styles.root}>
        {cartData.length > 0 && (
          <BaseModal
            title={t<string>("cart.cart")}
            className={styles.modal}
            body={cartBody}
            footer={cartFooter}
          />
        )}

        {cartData.length === 0 && (
          <BaseModal
            className={styles.emptyCart}
            title={t<string>("cart.cart")}
            body={cartBodyEmpty}
            footer={cartFooterEmpty}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
