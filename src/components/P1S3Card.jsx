/* eslint-disable react/prop-types */
import '../styles/components/P1S3Card.scss';

const P1S3Card = (props) => {
  return (
    <article
      className={`p1s3-card p1s3-card__${props.laterality} ${props.index}`}
    >
      <div className='p1s3-card__img--circle-001 ta-center'>
        <div className='p1s3-card__img--circle-002 ta-center'>
          <div
            className={`p1s3-card__img--img p1s3-card__img--img-${props.img_id} ta-center`}
          ></div>
        </div>
      </div>

      <div className={`text-container text-container__${props.laterality}`}>
        <div className='p1s3-card__name text-h3-medium ta-center'>
          {props.name}
        </div>
        <div className='p1s3-card__pronoun text-label ta-center'>
          {props.pronoun}
        </div>
        <div className='p1s3-card__paragraph text-p2'>{props.paragraph}</div>
      </div>
    </article>
  );
};

export default P1S3Card;
