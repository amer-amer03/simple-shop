import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ICatalogDataResults } from "../../interfaces/catalog";
import { IProps } from "../../interfaces/props";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";

interface Props extends IProps {
  cartData: ICatalogDataResults[];
}

const CheckTable: FC<Props> = ({ cartData }): JSX.Element => {
  const { t } = useTranslation();

  const headers = [
    t<string>("check.quantity"),
    t<string>("check.description"),
    t<string>("check.unitPrice"),
    t<string>("check.additional"),
    t<string>("cart.total"),
  ];

  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.item}>
          {headers.map((header) => {
            return (
              <th key={header}>
                <BaseTypography value={header} />
              </th>
            );
          })}
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
  );
};

export default CheckTable;
