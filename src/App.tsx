import "./i18n";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";
import { modalSelector } from "./store/selectors/modal";
import Layout from "./components/Layout";
import styles from "./App.module.scss";

import { ROUTES } from "./utils/constants/urls";
import { isDarkThemeSelector } from "./store/selectors/theme";
const App: FC = (): JSX.Element => {
  const openModalType = useSelector(modalSelector);
  const isDarkTheme = useSelector(isDarkThemeSelector);

  const theme = isDarkTheme ? "dark" : "light";
  return (
    <div className={styles.App} data-theme={theme}>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.catalog} element={<CatalogPage />} />
        </Routes>
        <Modal modalOpenType={openModalType} theme={theme} />
      </Layout>
    </div>
  );
};

export default App;
