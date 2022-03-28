import { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";
import { modalSelector } from "./store/selectors/modal";
import Layout from "./components/Layout";
import "./App.css";
import { ROUTES } from "./utils/constants/urls";

const App: FC = () => {
  const openModalType = useSelector(modalSelector);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.catalog} element={<CatalogPage />} />
        </Routes>
        <Modal modalOpenType={openModalType} />
      </Layout>
    </div>
  );
};

export default App;
