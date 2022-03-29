import { Action } from "@reduxjs/toolkit";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ICatalogDataResults } from "../../interfaces/catalog";
import { IProps } from "../../interfaces/props";
import {
  decreaseCartItem,
  setTotalItemPrice,
  increaseCartItem,
  toggleSpecs,
  removeCartItem,
} from "../../store/actions/cart";
import BaseButton from "../BaseButton";
import BaseCheckbox from "../BaseCheckbox";
import BaseTypography from "../BaseTypography";
import Close from "../icons/Close";
import styles from "./index.module.scss";

interface Props extends IProps {
  item: ICatalogDataResults;
  index: number;
}

const CartItem: FC<Props> = ({ item }): JSX.Element => {
  const dispatch = useDispatch();

  const handleIncreaseCartItem = (i: ICatalogDataResults): Action => {
    return dispatch(increaseCartItem(i));
  };
  const handleDecreaseCartItem = (i: ICatalogDataResults): Action => {
    return dispatch(decreaseCartItem(i));
  };

  const handletoggleSpecs = (
    item: ICatalogDataResults,
    spec: string
  ): Action => {
    return dispatch(toggleSpecs(item, spec));
  };

  useEffect(() => {
    let totalSpecsPrice = item.quantity
      ? item.priceSale * item.quantity
      : item.priceSale;
    item.specs.forEach((spec) => {
      if (spec.checked) totalSpecsPrice += spec.price;
    });
    dispatch(setTotalItemPrice(item.id, totalSpecsPrice));
  }, [item.specs, item.priceSale, item.id, item.quantity, dispatch]);

  const handleRemoveItem = () => {
    return dispatch(removeCartItem(item));
  };

  return (
    <div key={item.id} className={styles.item}>
      <div className={styles.top}>
        <div className={styles.removeItemButton} onClick={handleRemoveItem}>
          <Close />
        </div>
        <div className={styles.imageBox}>
          <img className={styles.image} src={item.imageUrl} alt={item.title} />
        </div>
        <div>
          <div className={styles.title}>
            <BaseTypography value={item.title} />
          </div>
          <div>
            {item.specs.map((spec) => {
              return (
                <BaseCheckbox
                  key={spec.title}
                  className={styles.checkBox}
                  checked={!!spec.checked}
                  onChange={() => handletoggleSpecs(item, spec.title)}
                  value={`${item.quantity}`}
                  label={`${spec.description} - ${spec.price} ₴`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.quantityButtons}>
          <BaseButton
            onClick={() => handleDecreaseCartItem(item)}
            value={"-"}
          />
          <BaseTypography
            className={styles.quantity}
            value={`${item.quantity}`}
          />
          <BaseButton
            onClick={() => handleIncreaseCartItem(item)}
            value={"+"}
          />
        </div>
        <div className={styles.price}>
          <BaseTypography value={`${item.totalPrice} ₴`} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
