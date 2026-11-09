import '../styles/components/BtnResults.scss';
import dataMenu from '../data/dataMenu.json';

const BtnResults = (props) => {
  const handleClick = () => {
    props.funShowModal(props.modalVisible);
  };

  return (
    <>
      <span
        className='btn-results text-btn'
        onClick={handleClick}
      >
        {dataMenu.menu[4].text}
      </span>
    </>
  );
};

export default BtnResults;
