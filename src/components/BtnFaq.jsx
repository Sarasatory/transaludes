import '../styles/components/BtnFaq.scss';

const BtnFaq = (props) => {
  return (
    <button className={`btn-faq ${props.isOpenBtn ? 'open' : ''}`}></button>
  );
};

export default BtnFaq;
