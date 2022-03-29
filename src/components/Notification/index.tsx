import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../../store/actions/notification";
import { notificationSelector } from "../../store/selectors/notification";
import BaseTypography from "../BaseTypography";
import Close from "../icons/Close";
import styles from "./index.module.scss";

const Notification: React.FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const notificationType = useSelector(notificationSelector);

  useEffect(() => {
    if (notificationType) {
      setTimeout(() => {
        return dispatch(removeNotification());
      }, 3000);
    }
  }, [notificationType, dispatch]);

  if (!notificationType) return null;

  const handleHideModal = () => {
    return dispatch(removeNotification());
  };

  return (
    <div className={styles.root}>
      <div className={styles.button} onClick={handleHideModal}>
        <Close />
      </div>
      <BaseTypography value={notificationType} />
    </div>
  );
};

export default Notification;
