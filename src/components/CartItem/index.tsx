import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { ICatalogDataResults } from "../../interfaces/catalog"
import { IProps } from "../../interfaces/props"
import { decreaseCartItem, increaseCartItem, toggleSpecs } from "../../store/actions/cart";
import BaseButton from "../BaseButton";
import BaseCheckbox from "../BaseCheckbox"
import BaseTypography from "../BaseTypography";
import styles from './index.module.scss';

interface Props extends IProps {
    item: ICatalogDataResults
    index: number
    grandTotal: number[]
    setGrandTotal: React.Dispatch<React.SetStateAction<number[]>>
}

const CartItem: React.FC<Props> = ({ item, index, grandTotal, setGrandTotal }) => {
    const [checkedSpecs, setCheckedSpecs] = useState<boolean[]>(new Array(item.specs.length).fill(false))
    const [itemTotal, setItemTotal] = useState(0);
    const dispatch = useDispatch()

    const handleIncreaseCartItem = (i: ICatalogDataResults) => {
        dispatch(increaseCartItem(i))
    }
    const handleDecreaseCartItem = (i: ICatalogDataResults) => {
        dispatch(decreaseCartItem(i))
    }

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedSpecs.map((item: any, index: number) =>
            index === position ? !item : item
        );
        setCheckedSpecs(updatedCheckedState);
    };
    const handletoggleSpecs = (item: ICatalogDataResults, currentSpec: string) => {
        dispatch(toggleSpecs(item, currentSpec))
    }
    useEffect(() => {
        let sum = 0
        const totalPrice = checkedSpecs.map(
            (checkedSpec, index) => {
                if (checkedSpec) {
                    return sum + item.specs[index].price;
                }
                return sum;
            },
        );
        item.quantity && setItemTotal((totalPrice.reduce((previousValue, currentValue) => previousValue + currentValue) + item.price) * item.quantity);
    }, [])

    useEffect(() => {
        let sum = 0
        const totalPrice = checkedSpecs.map(
            (checkedSpec, index) => {
                if (checkedSpec) {
                    return sum + item.specs[index].price;
                }
                return sum;
            },
        );
        item.quantity && setItemTotal((totalPrice.reduce((previousValue, currentValue) => previousValue + currentValue) + item.price) * item.quantity);
    }, [checkedSpecs, item])


    useEffect(() => {
        const newArr = [...grandTotal]
        newArr[index] = itemTotal
        setGrandTotal(newArr)
    }, [index, itemTotal])

    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.top}>
                <img className={styles.image} src={item.imageUrl} alt="" />
                <div>
                    <div className={styles.title}>
                        <BaseTypography value={item.title} />
                    </div>
                    <div >
                        {item.specs.map((spec, index) => {
                            return (
                                <BaseCheckbox key={spec.title} checked={checkedSpecs[index]} onChange={() => handletoggleSpecs(item, spec.title)} value={`${item.quantity}`} label={`${spec.title}- ${spec.description} -  ₴${`${item.quantity && spec.price * item.quantity}`}`} />
                            )
                        })}
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
                    <BaseTypography value={`${itemTotal} ₴`} />
                </div>
            </div>

        </div>
    )
}

export default CartItem