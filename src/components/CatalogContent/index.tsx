import classNames from "classnames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ICatalogDataResults } from "../../interfaces/catalog";
import { IProps } from "../../interfaces/props";
import { increaseCartItem } from "../../store/actions/cart";
import { addNotification } from "../../store/actions/notification";
import BaseButton from "../BaseButton";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

interface Props extends IProps {
  item: ICatalogDataResults;
  checkedSwitch: boolean;
}

const CatalogContent: FC<Props> = ({ item, checkedSwitch }): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleAddCartItem = (i: ICatalogDataResults) => {
    dispatch(increaseCartItem(i));
    dispatch(addNotification(`${i.title} - ${t<string>("catalog.addToCart")}`));
  };

  const starRating = (rating: number) => {
    let starHtml = "";
    let increment = 0;
    let max = 5;

    while (increment < rating) {
      starHtml += "★";
      increment++;
    }

    while (max > rating) {
      starHtml += "☆";
      max--;
    }
    return starHtml;
  };
  const catalogItemStyles = checkedSwitch
    ? classNames(styles.catalogItem, styles.catalogItemSmall)
    : styles.catalogItem;

  return (
    <div className={catalogItemStyles}>
      <div className={styles.catalogImageBox}>
        <img
          className={styles.catalogImage}
          src={item.imageUrl}
          alt={item.title}
        />
      </div>
      <div>
        <div>
          <BaseTypography value={item.title} />
        </div>
        <div>
          {starRating(item.rating)}
          <BaseTypography value={` ${item.rating}/5`} />
        </div>
        <div>
          <BaseTypography className={styles.price} value={`${item.price} ₴`} />
          <br />
          <BaseTypography
            className={styles.priceSale}
            value={`${item.priceSale} ₴`}
          />
        </div>
      </div>
      <BaseButton
        className={styles.button}
        onClick={() => handleAddCartItem(item)}
        type="button"
        value={t<string>("catalog.addToCart")}
      />
    </div>
  );
};

export default CatalogContent;
