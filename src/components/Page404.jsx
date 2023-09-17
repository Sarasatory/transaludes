import '../styles/components/Page404.scss';

const Page404 = () => {
  return (
    <section className='page404'>
      <div className='earth'>
        <div className='earth__bg'>
          <p className='text-p1-regular--cookies ta-center rotate0'>
            ¡La página que buscas no está por aquí...
          </p>
          <p className='text-p1-regular--cookies ta-center rotate180'>
            ...ni por aquí tampoco!
          </p>
        </div>
      </div>
      <div className='text-container'>
        <h1 className='text-h1--404 ta-center'>404</h1>
      </div>
    </section>
  );
};

export default Page404;
