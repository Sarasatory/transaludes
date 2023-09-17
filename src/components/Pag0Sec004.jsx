import '../styles/components/Pag0Sec004.scss';
import P0S4Card from './P0S4Card';

import dataCards from '../data/dataCards.json';

const Pag0Sec004 = () => {
  return (
    <section className='p0s4'>
      <div className='max-container'>
        <h2 className='text-h2'>Entre nuestros principales objetivos están:</h2>
        <div className='p0s4__grid'>
          {dataCards.cards.map((item, index) => (
            <P0S4Card
              key={index}
              id={item.id}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pag0Sec004;
