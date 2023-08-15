import '../styles/components/BtnFaq.scss';
import {useState} from 'react';

const BtnFaq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`btn-faq ${isOpen ? 'open' : ''}`}
      onClick={toggleFAQ}
    ></button>
  );
};

export default BtnFaq;
