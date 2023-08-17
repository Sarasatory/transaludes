import '../styles/components/PagSecTextImg.scss';
import ParallaxEffect003 from './ParallaxEffect003';

const Pag0Sec005 = () => {
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
              <li className='list-li text-p2'>
                Comparar y monitorizar su estado de salud con el de la población
                general en España.
              </li>
              <li className='list-li text-p2'>
                Analizar la discriminación que sufre, especialmente en el
                sistema sanitario.
              </li>
              <li className='list-li text-p2'>
                Orientar y adecuar las intervenciones preventivas y
                asistenciales a sus necesidades.
              </li>
              <li className='list-li text-p2'>
                Difundir resultados útiles para las instituciones sanitarias y
                las entidades comunitarias.
              </li>
            </ul>
          </div>
          <div className='p0s5__grid--img'>
            <ParallaxEffect003 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pag0Sec005;
