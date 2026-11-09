import './styles/components/App.scss';

import Nav from './components/Nav';
import ModalBtn from './components/ModalBtn';
import Page0 from './components/Page0';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page404 from './components/Page404';
import Legal from './components/Legal';
import Privacy from './components/Privacy';
import Cookies from './components/Cookies';
import Footer from './components/Footer';

import {Route, Routes, useLocation} from 'react-router-dom';
import {useState, useEffect, useCallback} from 'react';

const App = () => {
  // Menú tablet/móvil: el icono de barras se oculta ('d-hidden') al abrir el menú.
  const [visibility, setVisibility] = useState('');
  const [visibilityNav, setVisibilityNav] = useState('closed');

  // Desplegable de descargas (escritorio).
  const [modalVisible, setModalVisible] = useState('');

  // Scroll arriba al cambiar de página.
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const changeVisibilityBtn = () => {
    setVisibility('d-hidden');
    setVisibilityNav('open');
  };

  const changeVisibilityNav = () => {
    setVisibility('');
    setVisibilityNav('closed');
  };

  const funShowModal = () => setModalVisible('modal-visible');
  const funHideModal = useCallback(() => setModalVisible(''), []);

  return (
    <>
      <Nav
        visibility={visibility}
        visibilityNav={visibilityNav}
        changeVisibilityBtn={changeVisibilityBtn}
        changeVisibilityNav={changeVisibilityNav}
        modalVisible={modalVisible}
        funShowModal={funShowModal}
        funHideModal={funHideModal}
      />

      <ModalBtn
        modalVisible={modalVisible}
        funHideModal={funHideModal}
      />

      <Routes>
        <Route
          path='/'
          element={<Page0 />}
        />
        <Route
          path='/Page1'
          element={<Page1 />}
        />
        <Route
          path='/Page2'
          element={<Page2 />}
        />
        <Route
          path='/Page3'
          element={<Page3 />}
        />
        <Route
          path='/Legal'
          element={<Legal />}
        />
        <Route
          path='/Privacy'
          element={<Privacy />}
        />
        <Route
          path='/Cookies'
          element={<Cookies />}
        />
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
