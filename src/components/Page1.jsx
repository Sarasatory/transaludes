import '../styles/components/Page.scss';
import Pag1Sec001 from './Pag1Sec001';
import Pag1Sec002 from './Pag1Sec002';
import Pag1Sec003 from './Pag1Sec003';
import Pag1Sec004 from './Pag1Sec004';

const Page1 = () => {
  return (
    <main
      className='page'
      id='page1'
    >
      <Pag1Sec001 />
      <Pag1Sec002 />
      <Pag1Sec003 />
      <Pag1Sec004 />
    </main>
  );
};

export default Page1;
