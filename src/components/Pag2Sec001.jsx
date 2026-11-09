import '../styles/components/Pag2Sec001.scss';
import P2S1Card from './P2S1Card';
import dataFaqs from '../data/dataFaqs.json';

const Pag2Sec001 = () => {
  return (
    <section className='p2s1'>
      <div className='max-container'>
        <div className='p2s1__little-container'>
          <h1 className='text-h1 ta-center'>Preguntas frecuentes</h1>
          <p className='text-p1-regular ta-center'>
            {/* &nbsp; entre las 3 últimas palabras: si hay salto de línea al
                final, bajan juntas y nunca queda "III." suelto. */}
            Transaludes es un proyecto liderado por un equipo de investigadores
            del Instituto de Salud&nbsp;Carlos&nbsp;III.
          </p>
        </div>
        <div className='p2s1__cards'>
          {dataFaqs.faq.map((item, index) => (
            <P2S1Card
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pag2Sec001;
