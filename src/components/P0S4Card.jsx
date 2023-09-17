/* eslint-disable react/prop-types */
import '../styles/components/P0S4Card.scss';

const P0S4Card = (props) => {
  return (
    <section className='p0s4-card'>
      <div className='p0s4-card__title'>
        <div
          className={`p0s4-card__title--icon p0s4-card__title--icon${props.id}`}
        ></div>
        <div className='p0s4-card__title--text text-h3-medium'>
          {props.title}
        </div>
      </div>
      <div className='p0s4-card__paragraph text-p2'>{props.paragraph}</div>
    </section>
  );
};

export default P0S4Card;
