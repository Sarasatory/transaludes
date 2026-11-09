import '../styles/components/ModalBtn.scss';
import dataMenu from '../data/dataMenu.json';
import fileUrl from '../utils/fileUrl';

import {useEffect} from 'react';

// Desplegable de descargas del menú de escritorio.
// Se cierra al pulsar fuera, al elegir una opción o con la tecla Escape.
const ModalBtn = ({modalVisible, funHideModal}) => {
  useEffect(() => {
    if (!modalVisible) return undefined;
    const onKeyDown = (ev) => {
      if (ev.key === 'Escape') funHideModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalVisible, funHideModal]);

  return (
    <section
      className={`section-modal-btn ${modalVisible}`}
      onClick={funHideModal}
    >
      <div className='max-container'>
        <ul
          id='downloads-menu'
          className='downloads-menu'
          onClick={(ev) => ev.stopPropagation()}
        >
          {dataMenu.downloads.map((item) => (
            <li key={item.id}>
              <a
                href={fileUrl(item.file)}
                download={item.downloadName}
                target='_blank'
                rel='noopener noreferrer'
                className='downloads-menu__link'
                onClick={funHideModal}
              >
                <svg
                  className='downloads-menu__icon'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M11 3h2v9.17l3.59-3.58L18 10l-6 6-6-6 1.41-1.41L11 12.17V3zM5 19h14v2H5v-2z' />
                </svg>
                <span>{item.menuText}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ModalBtn;
