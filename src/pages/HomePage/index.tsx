import { FC } from "react";
import { useTranslation } from "react-i18next";
import BaseLink from "../../components/BaseLink";
import BaseTypography from "../../components/BaseTypography";
import styles from "./index.module.scss";

const HomePage: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <BaseLink className={styles.catalog} to="/catalog">
        <BaseTypography
          className={styles.title}
          value={t<string>("catalog.checkOut")}
        />
        <img
          className={styles.image}
          src="https://i.imgur.com/ZWcDAGJ.jpg"
          alt=""
        />
      </BaseLink>
    </div>
  );
};

export default HomePage;
