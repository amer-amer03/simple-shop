import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ICatalogDataResults, ISpecs } from "../../interfaces/catalog";
import { IProps } from "../../interfaces/props";
import { clearCart } from "../../store/actions/cart";
import { hideModal } from "../../store/actions/modal";
import { addNotification } from "../../store/actions/notification";
import {
  cartDataSelector,
  cartTotalPriceSelector,
} from "../../store/selectors/cart";
import BaseModal from "../BaseModal";
import BaseTypography from "../BaseTypography";
import CheckTable from "../CheckTable";
import styles from "./index.module.scss";

const Check: FC<IProps> = (): JSX.Element => {
  const { t } = useTranslation();
  const cartData = useSelector(cartDataSelector);
  const cartTotalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();

  const checkBody = (
    <>
      <CheckTable cartData={cartData} />
      <div className={styles.total}>
        <BaseTypography
          className={styles.total}
          value={`${t<string>("check.totalPrice")} - ${cartTotalPrice} ₴`}
        />
      </div>
    </>
  );

  const checkSmallBody = (
    <>
      {cartData.map((item: ICatalogDataResults) => {
        return (
          <div key={item.id} className={styles.checkSmallItem}>
            <div>
              <BaseTypography
                className={styles.checkSmallItemTitle}
                value={`${item.quantity} x ${item.title} - ${item.totalPrice} ₴`}
              />
            </div>
            <ul>
              {item.specs.map((spec: ISpecs) => {
                return (
                  spec.checked && <li key={spec.title}>{spec.description}</li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className={styles.total}>
        <BaseTypography
          className={styles.total}
          value={`${t<string>("check.totalPrice")} - ${cartTotalPrice} ₴`}
        />
      </div>
    </>
  );

  const handleCloseModal = (): void => {
    dispatch(addNotification(t<string>("check.thanks")));
    dispatch(hideModal());
    dispatch(clearCart());
  };

  return (
    <>
      <BaseModal
        title={t<string>("check.check")}
        className={styles.footerTable}
        onClose={handleCloseModal}
        body={checkBody}
      />
      <BaseModal
        title={t<string>("check.check")}
        className={styles.footerList}
        onClose={handleCloseModal}
        body={checkSmallBody}
      />
    </>
  );
};

export default Check;
