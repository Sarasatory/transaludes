/* eslint-disable react/prop-types */
import '../styles/components/Nav.scss';

import LogoRectangle from './LogoRectangle';
import BtnSurvey from './BtnSurvey';

import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Nav = (props) => {
  //
  // CONSTANTES DE ESTADO
  //
  const [URL, setURL] = useState('#/');

  // VARIABLES Y CONSTANTES GENERALES
  //

  //
  // HOOKS
  //
  useEffect(() => {
    if (URL === undefined || URL === '' || URL === '#/')
      props.setStatusMenu001('selected');
    else props.setStatusMenu001('no-selected');

    if (URL === '#/Page1') props.setStatusMenu002('selected');
    else props.setStatusMenu002('no-selected');

    if (URL === '#/Page2') props.setStatusMenu003('selected');
    else props.setStatusMenu003('no-selected');

    if (URL === '#/Page3') props.setStatusMenu004('selected');
    else props.setStatusMenu004('no-selected');

    const allowedUrls = ['', '#/', '#/Page1', '#/Page2', '#/Page3'];
    if (!allowedUrls.includes(URL)) {
      props.setStatusMenu001('');
      props.setStatusMenu002('');
      props.setStatusMenu003('');
      props.setStatusMenu004('');
    }
  }, [URL]);

  //
  // FUNCIONES MANEJADORAS
  //
  const handleClick = () => {
    props.changeVisibilityNav();

    setURL(window.location.hash);
  };

  //
  // FUNCIONES GENERALES
  //

  return (
    <section className='section-nav'>
      <div className='max-container'>
        <div className={`nav-mobile ${props.visibility}`}>
          <ul className='nav-mobile__logo'>
            <li
              id='0'
              onClick={handleClick}
            >
              <Link to='/'>
                <LogoRectangle />
              </Link>
            </li>
          </ul>

          <div
            className={`nav-mobile__icon-bars ${props.visibility}`}
            onClick={props.changeVisibilityBtn}
          ></div>
        </div>

        <nav
          className={`nav ${props.visibilityNav}`}
          onLoad={handleClick}
        >
          <div
            className='nav__icon-close'
            onClick={props.changeVisibilityNav}
          ></div>
          <ul className='nav__logo-rectangle'>
            <li
              id='0'
              onClick={handleClick}
            >
              <Link to='/'>
                <LogoRectangle />
              </Link>
            </li>
          </ul>
          <ul className='nav__menu'>
            <li
              id='0'
              className={`text-p1-regular ${props.statusMenu001}`}
              onClick={handleClick}
            >
              <Link to='/'>
                <span>Estudio Transaludes </span>{' '}
              </Link>
            </li>
            <li
              id='1'
              className={`text-p1-regular ${props.statusMenu002}`}
              onClick={handleClick}
            >
              <Link to='/Page1'>
                <span>Equipo</span>
              </Link>
            </li>
            <li
              id='2'
              className={`text-p1-regular ${props.statusMenu003}`}
              onClick={handleClick}
            >
              <Link to='/Page2'>
                <span>Preguntas frecuentes</span>
              </Link>
            </li>
            <li
              id='3'
              className={`text-p1-regular ${props.statusMenu004}`}
              onClick={handleClick}
            >
              <Link to='/Page3'>
                <span>Contacto</span>
              </Link>
            </li>
          </ul>
          <BtnSurvey />
        </nav>
      </div>
    </section>
  );
};

export default Nav;
