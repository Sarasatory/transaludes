/* eslint-disable react/prop-types */
import '../styles/components/P2S1Card.scss';
import BtnFaq from './BtnFaq';

import {useState} from 'react';

const P2S1Card = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenBtn, setIsOpenBtn] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  const toggleFAQBtn = () => {
    setIsOpenBtn(!isOpenBtn);
  };

  const handleClick = () => {
    toggleFAQ();
    toggleFAQBtn();
  };

  return (
    <div
      className='p2s1-card'
      onClick={handleClick}
    >
      <div className='max-container'>
        <div className='little-container'>
          <div className='p2s1-card__btn'>
            <BtnFaq
              toggleFAQBtn={toggleFAQBtn}
              isOpenBtn={isOpenBtn}
            />
          </div>

          <div className='p2s1-card__question'>
            <p className='text-p1-medium'>{props.question}</p>
          </div>

          <div className={`p2s1-card__answer ${isOpen ? 'faq-hidden' : ''}`}>
            <p className='text-p2 white-space-jump'>{props.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2S1Card;
