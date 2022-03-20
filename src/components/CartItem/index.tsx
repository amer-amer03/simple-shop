import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ICatalogDataResults } from "../../interfaces/catalog"
import { IProps } from "../../interfaces/props"
import { decreaseCartItem, increaseCartItem, toggleSpecs } from "../../store/actions/cart";
import { cartDataSelector } from "../../store/selectors/cart";
import BaseButton from "../BaseButton";
import BaseCheckbox from "../BaseCheckbox"
import BaseTypography from "../BaseTypography";
import styles from './index.module.scss';

interface Props extends IProps {
    item: ICatalogDataResults
    index: number
}

const CartItem: React.FC<Props> = ({ item }) => {

    const dispatch = useDispatch()

    const handleIncreaseCartItem = (i: ICatalogDataResults) => {
        dispatch(increaseCartItem(i))
    }
    const handleDecreaseCartItem = (i: ICatalogDataResults) => {
        dispatch(decreaseCartItem(i))
    }

    const handletoggleSpecs = (e: React.ChangeEvent<HTMLInputElement>, item: ICatalogDataResults) => {
        dispatch(toggleSpecs(e.target.value, item))
    }
    console.log(item.specs.antivirus)
    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.top}>
                <img className={styles.image} src={item.imageUrl} alt="" />
                <div>
                    <div className={styles.title}>
                        <BaseTypography value={item.title} />
                    </div>
                    <div >
                        <BaseCheckbox
                            value={`${item.specs.antivirus}`}
                            checked={item.specs.antivirus.checked ? item.specs.antivirus.checked : false}
                            onChange={(e) => handletoggleSpecs(e, item)}
                            label={`${item.specs.antivirus.title}- ${item.specs.antivirus.description} -  ₴${`${item.specs.antivirus.price}`}`} />
                        <BaseCheckbox
                            value={`${item.specs.os.title}`}
                            checked={item.specs.os.checked ? item.specs.os.checked : false}
                            onChange={(e) => handletoggleSpecs(e, item)}
                            label={`${item.specs.os.title}- ${item.specs.os.description} - ₴${`${item.specs.os.price}`}`} />
                        <BaseCheckbox
                            value={`${item.specs.screencare.title}`}
                            checked={item.specs.screencare.checked ? item.specs.screencare.checked : false}
                            onChange={(e) => handletoggleSpecs(e, item)}
                            label={`${item.specs.screencare.title}- ${item.specs.screencare.description} -  ₴${`${item.specs.screencare.price}`}`} />

                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.quantityButtons}>
                    <BaseButton onClick={() => handleDecreaseCartItem(item)} value={'-'} />
                    <BaseTypography className={styles.quantity} value={`${item.quantity}`} />
                    <BaseButton onClick={() => handleIncreaseCartItem(item)} value={'+'} />
                </div>
                <div className={styles.price}>
                    <BaseTypography value={`${item.totalPrice && item.totalPrice} ₴`} />
                </div>
            </div>

        </div>
    )
}

export default CartItem