import '../styles/components/Nav.scss';

import LogoRectangle from './LogoRectangle';
import BtnSurvey from './BtnSurvey';

import {Link, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

import dataMenu from '../data/dataMenu.json';

const Nav = (props) => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === '/' || pathname === '') {
      props.setStatusMenu001('selected');
      props.setStatusMenu002('no-selected');
      props.setStatusMenu003('no-selected');
      props.setStatusMenu004('no-selected');
    } else if (pathname === '/Page1') {
      props.setStatusMenu001('no-selected');
      props.setStatusMenu002('selected');
      props.setStatusMenu003('no-selected');
      props.setStatusMenu004('no-selected');
    } else if (pathname === '/Page2') {
      props.setStatusMenu001('no-selected');
      props.setStatusMenu002('no-selected');
      props.setStatusMenu003('selected');
      props.setStatusMenu004('no-selected');
    } else if (pathname === '/Page3') {
      props.setStatusMenu001('no-selected');
      props.setStatusMenu002('no-selected');
      props.setStatusMenu003('no-selected');
      props.setStatusMenu004('selected');
    } else {
      props.setStatusMenu001('');
      props.setStatusMenu002('');
      props.setStatusMenu003('');
      props.setStatusMenu004('');
    }
  }, [location]);

  const handleClick = () => {
    props.changeVisibilityNav();
  };

  return (
    <section className='section-nav'>
      <div className='max-container'>
        <div className={`nav-mobile ${props.visibility}`}>
          <ul className='nav-mobile__logo'>
            <li
              id='0'
              onClick={handleClick}
            >
              <LogoRectangle />
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
              <LogoRectangle />
            </li>
          </ul>
          <ul className='nav__menu'>
            <li
              id='0'
              className={`text-p1-regular ${props.statusMenu001}`}
              onClick={handleClick}
            >
              <Link to={dataMenu.menu[0].route}>
                <span>{dataMenu.menu[0].text}</span>
              </Link>
            </li>
            <li
              id='1'
              className={`text-p1-regular ${props.statusMenu002}`}
              onClick={handleClick}
            >
              <Link to={dataMenu.menu[1].route}>
                <span>{dataMenu.menu[1].text}</span>
              </Link>
            </li>
            <li
              id='2'
              className={`text-p1-regular ${props.statusMenu003}`}
              onClick={handleClick}
            >
              <Link to={dataMenu.menu[2].route}>
                <span>{dataMenu.menu[2].text}</span>
              </Link>
            </li>
            <li
              id='3'
              className={`text-p1-regular ${props.statusMenu004}`}
              onClick={handleClick}
            >
              <Link to={dataMenu.menu[3].route}>
                <span>{dataMenu.menu[3].text}</span>
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
