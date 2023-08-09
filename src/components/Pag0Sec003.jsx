import '../styles/components/Pag0Sec003.scss';
import ParallaxEffect from './ParallaxEffect';

const Pag0Sec003 = () => {
  const images_url = 'src/assets/images/dynamic-image-002';
  const dynamic_image = [
    `${images_url}/capa1.svg`,
    `${images_url}/capa2.svg`,
    `${images_url}/capa3.svg`,
    `${images_url}/capa4.svg`,
    `${images_url}/capa5.svg`,
  ];

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
              <li className='list-li-img'>
                Permitirá identificar las necesidades de salud de nuestra
                comunidad.
              </li>
              <li className='list-li-img'>
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
            <ParallaxEffect images={dynamic_image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pag0Sec003;
