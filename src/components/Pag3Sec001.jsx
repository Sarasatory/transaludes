import '../styles/components/Pag3Sec001.scss';
import BtnContact from './BtnContact';
import ParallaxEffect004 from './ParallaxEffect004';

const Pag3Sec001 = () => {
  return (
    <section className='p3s1'>
      <div className='max-container'>
        <div className='p3s1__grid'>
          <div className='p3s1__grid--text'>
            <h1 className='text-h1'>Contacto</h1>
            <p className='text-p1-regular'>
              ¿Quieres hacernos alguna pregunta? ¿Quieres que te mantengamos
              actualizado/a/e sobre TranSaludes? ¿Te gustaría colaborar de
              alguna manera?
            </p>
            <p className='text-p1-medium'>¡Tú lo haces posible!</p>
            <BtnContact />
          </div>
          <div className='p3s1__grid--img'>
            <div className='p3s1__grid--img--size'>
              <ParallaxEffect004 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pag3Sec001;
