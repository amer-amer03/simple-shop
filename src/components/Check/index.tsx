import { useDispatch, useSelector } from "react-redux";
import { IProps } from "../../interfaces/props";
import { clearCart } from "../../store/actions/cart";
import { hideModal } from "../../store/actions/modal";
import { addNotification } from "../../store/actions/notification";
import {
  cartDataSelector,
  cartTotalPriceSelector,
} from "../../store/selectors/cart";
import BaseButton from "../BaseButton";
import BaseModal from "../BaseModal";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

interface Props extends IProps {}

const Check: React.FC<Props> = () => {
  const cartData = useSelector(cartDataSelector);
  const cartTotalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();

  const checkBody = (
    <>
      <table className={styles.table}>
        <tr className={styles.item}>
          <th>Quantity</th>
          <th>Description</th>
          <th>Unit price</th>
          <th>additional</th>
          <th>Total price</th>
        </tr>
        {cartData.map((item) => {
          return (
            <tr>
              <td>{item.quantity}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <ul>
                  {item.specs.map((spec) => {
                    return spec.checked && <li>{spec.description}</li>;
                  })}
                </ul>
              </td>
              <td>{item.totalPrice}</td>
            </tr>
          );
        })}
      </table>
      <div className={styles.total}>
        <BaseTypography
          className={styles.total}
          value={`Total price - ${cartTotalPrice}₴`}
        />
      </div>
    </>
  );

  const handleCloseModal = () => {
    dispatch(addNotification("Thank you for your purchase"));
    dispatch(hideModal());
    dispatch(clearCart());
  };

  const cartFooter = (
    <div className={styles.footer}>
      <BaseButton onClick={handleCloseModal} value="Close window" />
    </div>
  );

  return <BaseModal title="Check" body={checkBody} footer={cartFooter} />;
};

export default Check;
