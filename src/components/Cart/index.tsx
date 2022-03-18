import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProps } from '../../interfaces/props';
import { cartDataSelector } from '../../store/selectors/cart';
import BaseButton from '../BaseButton';
import BaseModal from '../BaseModal';
import CartItem from '../CartItem';
import styles from './index.module.scss';

interface Props extends IProps {
}

const Cart: React.FC<Props> = () => {
    const cartData = useSelector(cartDataSelector)

    const [grandTotal, setGrandTotal] = useState<number[]>(new Array(cartData.length).fill(0));
    console.log(cartData)
    useEffect(() => {
        setGrandTotal(new Array(cartData.length).fill(0))
    }, [cartData.length])

    const cartBody = (
        cartData.map((item, index) => {
            return <CartItem key={item.id} item={item} index={index} setGrandTotal={setGrandTotal} grandTotal={grandTotal} />
        })
    )
    console.log(grandTotal, 'grandTotal')

    const cartFooter = (
        <div className={styles.footer}>
            <BaseButton value='Continue shopping' />
            <div className={styles.total}>
                <div>
                    total: {grandTotal.reduce((previousValue, currentValue) => previousValue + currentValue)}
                </div>
                <BaseButton value='Finalize purchase' />
            </div>

        </div>
    )
    return <div>
        <div className={styles.root}>
            {
                cartData.length > 0 ? <BaseModal title='cart' body={cartBody} footer={cartFooter} /> : <BaseModal title='cart' body='NO ITEMS' />
            }
        </div>
    </div>
}

export default Cart