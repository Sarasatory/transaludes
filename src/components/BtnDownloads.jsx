import '../styles/components/BtnDownloads.scss';
import dataMenu from '../data/dataMenu.json';
import fileUrl from '../utils/fileUrl';

// Dos botones de descarga (Informe completo + Resumen ejecutivo).
// variant='page' -> textos cortos (landing y último apartado).
// variant='menu' -> textos "Descargar …" (menú desplegado en tablet/móvil).
const BtnDownloads = ({variant = 'page', className = '', onClick}) => {
  return (
    <div className={`btn-downloads btn-downloads--${variant} ${className}`}>
      {dataMenu.downloads.map((item, index) => (
        <a
          key={item.id}
          href={fileUrl(item.file)}
          download={item.downloadName}
          target='_blank'
          rel='noopener noreferrer'
          className={`btn-download text-btn ${
            index === 0 ? 'btn-download--primary' : 'btn-download--secondary'
          }`}
          onClick={onClick}
        >
          {variant === 'menu' ? item.menuText : item.btnText}
        </a>
      ))}
    </div>
  );
};

export default BtnDownloads;
