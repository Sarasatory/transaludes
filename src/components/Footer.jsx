import '../styles/components/Footer.scss';

import {Link} from 'react-router-dom';
import LogoRectangle from './LogoRectangle';
import ImageWithAspectRatio from '../services/ImageWithAspectRatio';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__row001'>
        <div className='max-container'>
          <LogoRectangle />
          <div className='footer__row001__rrss'>
            <a href='#'>
              <div className='footer-icon footer__row001__rrss--fb'></div>
            </a>
            <a href='#'>
              <div className='footer-icon footer__row001__rrss--ig'></div>
            </a>
            <a href='#'>
              <div className='footer-icon footer__row001__rrss--tw'></div>
            </a>
          </div>
        </div>
      </div>

      <div className='footer__row002'>
        <div className='max-container'>
          <a href='#'>
            <ImageWithAspectRatio
              imageUrl='src/assets/logos/ue.svg'
              desiredHeight={48}
            />
          </a>
          <a href='#'>
            <ImageWithAspectRatio
              imageUrl='src/assets/logos/prtr.svg'
              desiredHeight={48}
            />
          </a>
          <a href='#'>
            <ImageWithAspectRatio
              imageUrl='src/assets/logos/mds.svg'
              desiredHeight={48}
            />
          </a>
          <a href='#'>
            <ImageWithAspectRatio
              imageUrl='src/assets/logos/isciii.svg'
              desiredHeight={48}
            />
          </a>
        </div>
      </div>

      <div className='footer__row003'>
        <div className='max-container'>
          <ul>
            <li>
              <Link to='Legal'>
                <span className='text-p3'>Aviso legal</span>
              </Link>
            </li>
            <span className='dot'>·</span>
            <li>
              <Link to='Privacy'>
                <span className='text-p3'>Política de privacidad</span>
              </Link>
            </li>
            <span className='dot'>·</span>
            <li>
              <Link to='Cookies'>
                <span className='text-p3'>Política de cookies</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer__row004'>
        <div className='max-container'>
          <span className='text-p3'>© Transaludes 2023.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
