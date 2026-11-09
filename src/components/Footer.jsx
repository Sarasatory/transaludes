import '../styles/components/Footer.scss';

import {Link} from 'react-router-dom';
import LogoRectangle from './LogoRectangle';
import dataLogosFooter from '../data/dataLogosFooter.json';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__row001'>
        <div className='max-container'>
          <LogoRectangle className='footer__row001__logo-rectangle' />
          <div className='footer__row001__rrss'>
            <a
              href='https://www.facebook.com/transaludes'
              target='_blank'
              rel='noopener noreferrer'
              title='Facebook de Transaludes'
            >
              <div className='footer-icon footer__row001__rrss--fb'></div>
            </a>
            <a
              href='https://www.instagram.com/transaludes/'
              target='_blank'
              rel='noopener noreferrer'
              title='Instagram de Transaludes'
            >
              <div className='footer-icon footer__row001__rrss--ig'></div>
            </a>
            <a
              href='https://twitter.com/transaludes'
              target='_blank'
              rel='noopener noreferrer'
              title='Twitter de Transaludes'
            >
              <div className='footer-icon footer__row001__rrss--tw'></div>
            </a>
          </div>
        </div>
      </div>

      <div className='footer__row002'>
        <div className='max-container'>
          {dataLogosFooter.logos.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={`image-service${item.id}`}></div>
            </a>
          ))}
        </div>
      </div>

      <div className='footer__row003'>
        <div className='max-container'>
          <ul>
            <li>
              <Link to='/Legal'>
                <span className='text-p3'>Aviso legal</span>
              </Link>
            </li>
            <span className='dot'>·</span>
            <li>
              <Link to='/Privacy'>
                <span className='text-p3'>Política de privacidad</span>
              </Link>
            </li>
            <span className='dot'>·</span>
            <li>
              <Link to='/Cookies'>
                <span className='text-p3'>Política de cookies</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer__row003'>
        <div className='max-container'>
          <div className='footer__row004--item001 text-p3'>
            © Transaludes {new Date().getFullYear()}.
          </div>
        </div>
      </div>

      <div className='footer__row004'>
        <div className='max-container'>
          <a
            className='footer__row004--item002 text-p3 a-sub-queer'
            href='https://www.linkedin.com/in/satoryasensio'
            target='_blank'
            rel='noopener noreferrer'
            title='Satory Asensio - Web Developer'
          >
            <strong className='a-sub-queer-001'>Hecho con</strong>{' '}
            <div className='img-nbh-bg-white'>
              <div className='img-nbh'></div>
            </div>
            <strong className='a-sub-queer-002'>por Satory</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
