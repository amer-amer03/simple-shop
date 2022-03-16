import { useDispatch, useSelector } from 'react-redux';
import { ICatalogDataResults } from '../../interfaces/catalog';
import { decreaseCartItem, increaseCartItem } from '../../store/actions/cart';
import { cartDataSelector } from '../../store/selectors/cart';
import BaseButton from '../BaseButton';
import BaseCheckbox from '../BaseCheckbox';
import BaseTypography from '../BaseTypography';
import styles from './index.module.scss';

const Cart = () => {
    const cartData = useSelector(cartDataSelector)
    const dispatch = useDispatch()

    const handleIncreaseCartItem = (i: ICatalogDataResults) => {
        dispatch(increaseCartItem(i))
    }
    const handleDecreaseCartItem = (i: ICatalogDataResults) => {
        dispatch(decreaseCartItem(i))
    }
    const cartContent = (
        cartData.map((i) => {
            return (
                <div key={i.id} className={styles.item}>
                    <div className={styles.top}>
                        <img className={styles.image} src={i.imageUrl} alt="" />
                        <div>
                            <div>
                                <div className={styles.title}>
                                    <BaseTypography value={i.title} />
                                </div>
                                <div >
                                    <BaseCheckbox label={`${i.specs.antivirus.description} - ${i.specs.antivirus.price} ₴`} />
                                    <BaseCheckbox label={`${i.specs.os.description} - ${i.specs.os.price} ₴`} />
                                    <BaseCheckbox label={`${i.specs.screenCare.description} - ${i.specs.screenCare.price} ₴`} />
                                    <BaseCheckbox label={`${i.specs.antivirus.description} - ${i.specs.antivirus.price} ₴`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.quantityButtons}>
                            <BaseButton onClick={() => handleDecreaseCartItem(i)} value={'-'} />
                            <BaseTypography className={styles.quantity} value={`${i.quantity}`} />
                            <BaseButton onClick={() => handleIncreaseCartItem(i)} value={'+'} />
                        </div>
                        <div className={styles.price}>
                            <BaseTypography value={`${i.price} ₴`} />
                        </div>
                    </div>

                </div>
            )
        })
    )
    return <div>
        <div className={styles.root}>
            {
                cartData.length > 0 ? cartContent : <BaseTypography value='NO ITEMS' />
            }   { }
        </div>
    </div>
}

export default Cart