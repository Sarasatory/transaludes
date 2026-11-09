import '../styles/components/BtnResults.scss';
import dataMenu from '../data/dataMenu.json';

// Botón "Descargar resultados" del menú de escritorio: abre/cierra el desplegable (ModalBtn).
const BtnResults = ({modalVisible, funShowModal, funHideModal}) => {
  const isOpen = modalVisible === 'modal-visible';

  return (
    <button
      type='button'
      className='btn-results text-btn'
      aria-haspopup='true'
      aria-expanded={isOpen}
      aria-controls='downloads-menu'
      onClick={isOpen ? funHideModal : funShowModal}
    >
      {dataMenu.downloadsBtn}
    </button>
  );
};

export default BtnResults;
