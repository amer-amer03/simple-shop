import { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CatalogPage from './pages/CatalogPage';
import Modal from './components/Modal';
import ModalContent from './components/ModalContent';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import { modalSelector } from './store/selectors/modal';

const App: FC = () => {
  const openModalType = useSelector(modalSelector);
  const [modalOpenType, setModalOpenType] = useState<string>('')

  useEffect(() => {
    setModalOpenType(openModalType)
  }, [openModalType])

  const Modal2 = () => {
    return <div>
      content2
    </div>
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>

      <Modal modalOpenType={modalOpenType}>
        <ModalContent setModalOpenType={setModalOpenType} openModalType={openModalType} children={<Modal2 />} />
      </Modal>
    </div>
  );
}

export default App;
