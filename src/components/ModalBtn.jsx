import '../styles/components/ModalBtn.scss';
import dataMenu from '../data/dataMenu.json';

const ModalBtn = (props) => {
  const handleClick = () => {
    props.funHideModal(props.modalVisible);
  };
  const handleNothing = (ev) => {
    ev.stopPropagation();
  };

  return (
    <section
      className={`section-modal-btn ${props.modalVisible}`}
      onClick={handleClick}
    >
      <div
        className='max-container'
        onClick={(ev) => {
          handleNothing(ev);
        }}
      >
        <a href='#' className='text-p1-regular link'>
          <span>{dataMenu.menu[5].text}</span>
        </a>
        <a href='#' className='text-p1-regular link'>
          <span>{dataMenu.menu[6].text}</span>
        </a>
      </div>
    </section>
  );
};

export default ModalBtn;
