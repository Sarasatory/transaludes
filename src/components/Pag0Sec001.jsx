import '../styles/components/PagSecTextImg.scss';

import ParallaxEffect001 from './ParallaxEffect001';
import BtnDownloads from './BtnDownloads';

const Pag0Sec001 = () => {
  return (
    <article className='p0s1'>
      <div className='max-container'>
        <div className='p0s1__grid'>
          <div className='p0s1__grid--text'>
            <h1 className='text-h1'>Transaludes</h1>
            <p className='text-p1-regular'>
              El primer estudio a nivel nacional en España que explora el
              estado de salud de las personas trans y/o no binarias.
            </p>
            <p className='text-p2'>
              Gracias a la participación de cientos de personas trans y no
              binarias que compartieron su experiencia, hemos podido elaborar un
              informe que refleja sus realidades y necesidades.
            </p>
            <p className='text-p2'>
              Este trabajo colectivo es un paso más hacia la visibilización y
              mejora de la salud comunitaria.
            </p>
            <p className='text-p2'>Ahora puedes consultar los resultados:</p>
            <BtnDownloads className='p0s1__downloads' />
          </div>
          <div className='p0s1__grid--img'>
            <ParallaxEffect001 />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Pag0Sec001;
