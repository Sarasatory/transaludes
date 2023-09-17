import '../styles/components/Pag1Sec004.scss';

import dataLogosCollaborators from '../data/dataLogosCollaborators.json';

const Pag1Sec004 = () => {
  return (
    <section className='p1s4'>
      <div className='max-container'>
        <div className='p1s4__little-container'>
          <h2 className='p1s4__little-container__title text-h2 ta-center'>
            Colaboraciones
          </h2>

          <h4 className='p1s4__little-container__title-002 text-h4-regular ta-center'>
            Desde el equipo mostramos nuestro agradecimiento a las asociaciones
            y centros participantes que contribuyen a la difusión y realización
            de la encuesta.
          </h4>
        </div>
        <div className='p1s4__logos'>
          {dataLogosCollaborators.collaborators.map((item) => (
            <a
              key='index'
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={`image-collaborators image-collaborators${item.id}`}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pag1Sec004;
