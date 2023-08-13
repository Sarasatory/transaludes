import './styles/components/App.scss';

import Nav from './components/Nav';
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
import {useState, useEffect} from 'react';

const App = () => {
  //
  // CONSTANTES DE ESTADO
  //
  const [visibility, setVisibility] = useState('');
  const [visibilityNav, setVisibilityNav] = useState('closed');

  const [statusMenu001, setStatusMenu001] = useState('');
  const [statusMenu002, setStatusMenu002] = useState('');
  const [statusMenu003, setStatusMenu003] = useState('');
  const [statusMenu004, setStatusMenu004] = useState('');

  //
  // FUNCIONES GENERALES
  //
  /// Scroll to top
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

  return (
    <>
      <Nav
        visibility={visibility}
        visibilityNav={visibilityNav}
        setVisibility={setVisibility}
        setVisibilityNav={setVisibilityNav}
        changeVisibilityBtn={changeVisibilityBtn}
        changeVisibilityNav={changeVisibilityNav}
        statusMenu001={statusMenu001}
        statusMenu002={statusMenu002}
        statusMenu003={statusMenu003}
        statusMenu004={statusMenu004}
        setStatusMenu001={setStatusMenu001}
        setStatusMenu002={setStatusMenu002}
        setStatusMenu003={setStatusMenu003}
        setStatusMenu004={setStatusMenu004}
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
          path='*'
          element={<Page404 />}
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
      </Routes>

      <Footer />
    </>
  );
};

export default App;
