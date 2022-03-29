import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import styles from "./index.module.scss";

const Check: FC<IProps> = (): JSX.Element => {
  const cartData = useSelector(cartDataSelector);
  const cartTotalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();

  const checkBody = (
    <>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.item}>
            <th>
              <BaseTypography value="Quantity" />
            </th>
            <th>
              <BaseTypography value="Description" />
            </th>
            <th>
              <BaseTypography value="Unit price" />
            </th>
            <th>
              <BaseTypography value="Additional" />
            </th>
            <th>
              <BaseTypography value="Total price" />
            </th>
          </tr>
          {cartData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.quantity}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <ul>
                    {item.specs.map((spec) => {
                      return (
                        spec.checked && (
                          <li key={spec.title}>{spec.description}</li>
                        )
                      );
                    })}
                  </ul>
                </td>
                <td>{item.totalPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.total}>
        <BaseTypography
          className={styles.total}
          value={`Total price - ${cartTotalPrice} ₴`}
        />
      </div>
    </>
  );

  const checkSmallBody = (
    <>
      {cartData.map((item) => {
        return (
          <div className={styles.checkSmallItem}>
            <div>
              <BaseTypography
                className={styles.checkSmallItemTitle}
                value={`${item.quantity} x ${item.title} - ${item.totalPrice} ₴`}
              />
            </div>
            <ul>
              {item.specs.map((spec) => {
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
          value={`Total price - ${cartTotalPrice} ₴`}
        />
      </div>
    </>
  );

  const handleCloseModal = () => {
    dispatch(addNotification("Thank you for your purchase"));
    dispatch(hideModal());
    dispatch(clearCart());
  };

  return (
    <>
      <BaseModal
        title="Check"
        className={styles.footerTable}
        onClose={handleCloseModal}
        body={checkBody}
      />
      <BaseModal
        title="Check"
        className={styles.footerList}
        onClose={handleCloseModal}
        body={checkSmallBody}
      />
    </>
  );
};

export default Check;
