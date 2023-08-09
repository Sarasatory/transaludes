import '../styles/components/Pag0Sec001.scss';
import BtnSurvey from './BtnSurvey';
import ParallaxEffect from './ParallaxEffect';

const Pag0Sec001 = () => {
  const images_url = 'src/assets/images/dynamic-image-001';
  const dynamic_image = [
    `${images_url}/capa1.svg`,
    `${images_url}/capa2.svg`,
    `${images_url}/capa3.svg`,
    `${images_url}/capa4.svg`,
    `${images_url}/capa5.svg`,
  ];

  return (
    <section className='p0s1'>
      <div className='max-container'>
        <div className='p0s1__grid'>
          <div className='p0s1__grid--text'>
            <h1 className='text-h1'>Transaludes</h1>
            <p className='text-p2'>
              El primer estudio a nivel nacional en España que busca conocer el
              estado de salud de las personas trans y/o no binarias.
            </p>
            <p className='text-p2'>
              ¿Eres una persona trans y/o no binaria? ¿Vives en España? ¿Tienes
              15 años o más?
            </p>
            <ul>
              <li className='list-li-img'>
                La encuesta es totalmente anónima.
              </li>
              <li className='list-li-img'>Se completa en unos 30 minutos.</li>
              <li className='list-li-img'>
                Puedes guardarla y continuar en otro momento desde el mismo
                dispositivo.
              </li>
              <li className='list-li-img'>Mejor desde ordenador o tablet.</li>
            </ul>
            <BtnSurvey />
          </div>
          <div className='p0s1__grid--img'>
            <ParallaxEffect images={dynamic_image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pag0Sec001;
