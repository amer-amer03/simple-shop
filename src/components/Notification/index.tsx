import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from '../../store/actions/notification';
import { notificationSelector } from '../../store/selectors/notification';
import BaseTypography from '../BaseTypography';
import styles from './index.module.scss';


const Notification = () => {
    const dispatch = useDispatch()
    const notificationType = useSelector(notificationSelector);

    useEffect(() => {
        if (notificationType) {
            setTimeout(() => {
                dispatch(removeNotification())
            }, 3000)
        }
    }, [notificationType, dispatch])

    if (!notificationType) return null

    return (
        <div className={styles.root}>
            <BaseTypography value={notificationType} />
        </div>
    )
}

export default Notification