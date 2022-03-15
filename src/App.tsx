import { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CatalogPage from './pages/CatalogPage';
import Modal from './components/Modal';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import { modalSelector } from './store/selectors/modal';
import Layout from './components/Layout';

const App: FC = () => {
  const openModalType = useSelector(modalSelector);

  const Modal2 = () => {
    return <div>
      content2
    </div>
  }

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>

        <Modal modalOpenType={openModalType} />
      </Layout>

    </div>
  );
}

export default App;
