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
            href='https://satory.es'
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
          <a
            className='footer__row004--linkedin'
            href='https://www.linkedin.com/in/satoryasensio'
            target='_blank'
            rel='noopener noreferrer'
            title='LinkedIn de Satory Asensio'
            aria-label='LinkedIn de Satory Asensio'
          >
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
