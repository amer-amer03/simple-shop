import BaseLink from "../../components/BaseLink";
import BaseTypography from "../../components/BaseTypography";
import styles from './index.module.scss';

const HomePage = () => {
    return (
        <div className={styles.root} >
            <BaseLink className={styles.catalog} to="/catalog">
                <BaseTypography className={styles.title} value='check out our catalog' />
                <img className={styles.image} src="https://i.imgur.com/ZWcDAGJ.jpg" alt="" />
            </BaseLink>
        </div>
    )
}

export default HomePage