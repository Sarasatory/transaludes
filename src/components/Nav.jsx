import '../styles/components/Nav.scss';

import LogoRectangle from './LogoRectangle';
import BtnResults from './BtnResults';
import BtnDownloads from './BtnDownloads';

import {Link, useLocation} from 'react-router-dom';

import dataMenu from '../data/dataMenu.json';

const Nav = ({
  visibility,
  visibilityNav,
  changeVisibilityBtn,
  changeVisibilityNav,
  modalVisible,
  funShowModal,
  funHideModal,
}) => {
  const {pathname} = useLocation();

  // Enlace activo: 'selected' en la sección actual, 'no-selected' en el resto.
  // En rutas que no son del menú (Legal, Privacy, Cookies, 404) ninguno se marca.
  const isMenuRoute = dataMenu.menu.some((item) => item.route === pathname);
  const statusMenu = (route) => {
    if (!isMenuRoute) return '';
    return route === pathname ? 'selected' : 'no-selected';
  };

  return (
    <section className='section-nav'>
      <div className='max-container'>
        <div className={`nav-mobile ${visibility}`}>
          <ul className='nav-mobile__logo'>
            <li onClick={changeVisibilityNav}>
              <LogoRectangle />
            </li>
          </ul>

          <div
            className={`nav-mobile__icon-bars ${visibility}`}
            onClick={changeVisibilityBtn}
          ></div>
        </div>

        <nav className={`nav ${visibilityNav}`}>
          <div
            className='nav__icon-close'
            onClick={changeVisibilityNav}
          ></div>
          <ul className='nav__logo-rectangle'>
            <li onClick={changeVisibilityNav}>
              <LogoRectangle />
            </li>
          </ul>
          <ul className='nav__menu'>
            {dataMenu.menu.map((item) => (
              <li
                key={item.route}
                className={`text-p1-regular ${statusMenu(item.route)}`}
                onClick={changeVisibilityNav}
              >
                <Link to={item.route}>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Escritorio: botón que abre el desplegable de descargas */}
          <BtnResults
            modalVisible={modalVisible}
            funShowModal={funShowModal}
            funHideModal={funHideModal}
          />

          {/* Tablet y móvil: los dos botones de descarga a primer nivel */}
          <BtnDownloads
            variant='menu'
            className='nav__downloads'
            onClick={changeVisibilityNav}
          />
        </nav>
      </div>
    </section>
  );
};

export default Nav;
