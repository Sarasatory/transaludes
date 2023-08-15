/* eslint-disable react/prop-types */
import '../styles/components/P2S1Card.scss';
import BtnFaq from './BtnFaq';

import {useState} from 'react';

const P2S1Card = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p2s1-card'>
      <div className='max-container'>
        <div className='little-container'>
          <div
            className='p2s1-card__btn'
            onClick={toggleFAQ}
          >
            <BtnFaq />
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
