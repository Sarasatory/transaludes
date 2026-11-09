import '../styles/components/PagSecTextImg.scss';

import ParallaxEffect001 from './ParallaxEffect001';

const Pag0Sec001 = () => {
  return (
    <article className='p0s1'>
      <div className='max-container'>
        <div className='p0s1__grid'>
          <div className='p0s1__grid--text'>
            <h1 className='text-h1'>Transaludes</h1>
            <p className='text-p1-regular'>
              El primer estudio a nivel nacional en España que busca conocer el
              estado de salud de las personas trans y/o no binarias.
            </p>
            <p className='text-p2'>
              Desde octubre de 2023 hasta marzo de 2024 hemos tenido la
              oportunidad de recoger un gran número de experiencias, gracias a
              las personas que han formado parte de esta encuesta.
            </p>

            <p className='text-p1-regular'>Los resultados</p>
            <p className='text-p2'>
              En este momento estamos analizando toda la información recibida,
              cuyos resultados publicaremos en esta web.
            </p>

            <p className='text-p2'>
              Muchísimas gracias a todes les participantes. Juntes construimos
              nuestro discurso en salud.
            </p>
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
