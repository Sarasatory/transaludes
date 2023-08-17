import '../styles/components/PagSecImgText.scss';
import ParallaxEffect002 from './ParallaxEffect002';

const Pag0Sec003 = () => {
  return (
    <section className='p0s3'>
      <div className='max-container'>
        <div className='p0s3__grid'>
          <div className='p0s3__grid--text'>
            <h2 className='text-h2'>¿Qué es el estudio Transaludes?</h2>
            <p className='text-p2'>
              TranSaludes es un estudio de un Organismo Público de Investigación
              dirigido a conocer el estado de salud de las personas trans y/o no
              binarias en España.
            </p>
            <ul>
              <li className='list-li text-p2'>
                Permitirá identificar las necesidades de salud de nuestra
                comunidad.
              </li>
              <li className='list-li text-p2'>
                Propondrá mejoras en la atención de los servicios socio
                sanitarios.
              </li>
            </ul>
            <p className='text-p2'>
              Se trata de una encuesta online estatal y anónima que recoge
              información sobre la salud física, mental y sexual,
              discriminaciones y violencias, usos de servicios sanitarios y
              consumo de distintos tipos de sustancias en personas trans y/o no
              binarias.
            </p>
          </div>
          <div className='p0s3__grid--img'>
            <ParallaxEffect002 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pag0Sec003;
