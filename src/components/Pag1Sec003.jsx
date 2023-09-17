import '../styles/components/Pag1Sec003.scss';
import P1S3Card from './P1S3Card';
import dataTeam from '../data/dataTeam.json';

const Pag1Sec003 = () => {
  return (
    <section className='p1s3'>
      <div className='max-container'>
        <h2 className='p1s3__title text-h2 ta-center'>
          Equipo de investigación
        </h2>
        <div className='p1s3__cards'>
          {dataTeam.team.map((item, index) => (
            <P1S3Card
              key={index}
              img_id={item.img_id}
              name={item.name}
              pronoun={item.pronoun}
              paragraph={item.paragraph}
              laterality={item.laterality}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pag1Sec003;
