import '../styles/components/Pag0Sec005.scss';
import ParallaxEffect from './ParallaxEffect';

const Pag0Sec005 = () => {
  const images_url = 'src/assets/images/dynamic-image-003';
  const dynamic_image = [
    `${images_url}/capa1.svg`,
    `${images_url}/capa2.svg`,
    `${images_url}/capa3.svg`,
    `${images_url}/capa4.svg`,
    `${images_url}/capa5.svg`,
  ];

  return (
    <section className='p0s5'>
      <div className='max-container'>
        <div className='p0s5__grid'>
          <div className='p0s5__grid--text'>
            <h2 className='text-h2'>Impacto esperado</h2>
            <p className='text-p2'>
              Contar con estos datos de la comunidad trans y/o no binaria
              permitirá:
            </p>
            <ul>
              <li className='list-li-img'>
                Comparar y monitorizar su estado de salud con el de la población
                general en España.
              </li>
              <li className='list-li-img'>
                Analizar la discriminación que sufre, especialmente en el
                sistema sanitario.
              </li>
              <li className='list-li-img'>
                Orientar y adecuar las intervenciones preventivas y
                asistenciales a sus necesidades.
              </li>
              <li className='list-li-img'>
                Difundir resultados útiles para las instituciones sanitarias y
                las entidades comunitarias.
              </li>
            </ul>
          </div>
          <div className='p0s5__grid--img'>
            <ParallaxEffect images={dynamic_image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pag0Sec005;
