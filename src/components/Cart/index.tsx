import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProps } from '../../interfaces/props';
import { clearCart, setCartTotal } from '../../store/actions/cart';
import { hideModal } from '../../store/actions/modal';
import { addNotification } from '../../store/actions/notification';
import { cartDataSelector, cartTotalPriceSelector } from '../../store/selectors/cart';
import BaseButton from '../BaseButton';
import BaseModal from '../BaseModal';
import BasePdf from '../BasePdf';
import BaseTypography from '../BaseTypography';
import CartItem from '../CartItem';
import styles from './index.module.scss';
interface Props extends IProps {
}

const Cart: React.FC<Props> = () => {
    const cartData = useSelector(cartDataSelector)
    const cartTotalPrice = useSelector(cartTotalPriceSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        let cartTotal = 0
        cartData.map((item) => {
            cartTotal += item.totalPrice ? item.totalPrice : 0
        })
        dispatch(setCartTotal(cartTotal))
    }, [cartData])

    const handleCloseModal = () => {
        dispatch(hideModal())
    }

    const finalizePurchase = () => {
        dispatch(addNotification('Thank you for your purchase'))
        dispatch(clearCart())
        dispatch(hideModal())
    }
    const cartBody = (
        cartData.map((item, index) => {
            return <CartItem key={item.id} item={item} index={index} />
        })
    )

    const cartFooter = (
        <div className={styles.footer}>
            <BaseButton onClick={handleCloseModal} value='Continue shopping' />
            <div className={styles.total}>
                <div>
                    total: {cartTotalPrice}
                </div>
                <PDFDownloadLink document={<BasePdf />} fileName="FORM" > <BaseButton onClick={finalizePurchase} value='Finalize purchase' />  </PDFDownloadLink>
            </div>
        </div>
    )

    const cartBodyEmpty = (
        <div className={styles.emptyCartText}>
            <BaseTypography value='no items' />
        </div>
    )

    const cartFooterEmpty = (
        <div className={styles.emptyCartButton}>
            <BaseButton onClick={handleCloseModal} value='Continue shopping' />
        </div>
    )

    return <div>
        <div className={styles.root}>
            {cartData.length > 0 ? <BaseModal title='cart' className={styles.modal} body={cartBody} footer={cartFooter} /> : <BaseModal className={styles.emptyCart} title='cart' body={cartBodyEmpty} footer={cartFooterEmpty} />}
        </div>
    </div>
}

export default Cart