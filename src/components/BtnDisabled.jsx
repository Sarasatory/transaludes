import '../styles/components/BtnDisabled.scss';

const BtnDisabled = (props) => {
  const handleClick = () => {
    props.funShowModal(props.modalVisible);
  };

  return (
    <>
      <span
        className='btn-disabled text-btn'
        onClick={handleClick}
      >
        Quiero participar
      </span>
    </>
  );
};

export default BtnDisabled;
