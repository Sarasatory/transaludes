import '../styles/components/LegalPrivacyCookies.scss';

const Privacy = () => {
  return (
    <section className='lpc'>
      <div className='max-container'>
        <h1 className='text-h1 ta-center'>Política de privacidad</h1>
        <h2 className='text-h3-medium ta-center'>
          Información básica sobre Protección de Datos
        </h2>
        <div className='lpc__text-container'>
          <div className='lpc__text-container--line'>
            <p className='text-h4-medium'>Responsable del fichero:</p>
            <p className='text-p2'>Instituto de Salud Carlos III (ISCIII).</p>
          </div>
          <div className='lpc__text-container--line'>
            <p className='text-h4-medium'>Finalidad:</p>
            <p className='text-p2'>
              Remisión de noticias e información a través de la web de
              Transaludes.
            </p>
          </div>
          <div className='lpc__text-container--line'>
            <p className='text-h4-medium'>Base jurídica:</p>
            <p className='text-p2'>El consentimiento del interesado.</p>
          </div>
          <div className='lpc__text-container--line'>
            <p className='text-h4-medium'>Cesiones de datos:</p>
            <p className='text-p2'>
              No se cederán sus datos de carácter personal, salvo obligación
              legal.
            </p>
          </div>
          <div className='lpc__text-container--line'>
            <p className='text-h4-medium'>Derechos:</p>
            <p className='text-p2'>
              Acceso, rectificación, limitación del tratamiento, supresión,
              oposición y portabilidad de sus datos.
            </p>
          </div>
          <div className='lpc__text-container--line'>
            <p className='text-h4-medium'>Delegado de protección de datos:</p>
            <p className='text-p2'>
              <a
                href='mailto:dpd@isciii.es'
                className='a-sub'
              >
                dpd@isciii.es
              </a>
            </p>
          </div>
          <div className='lpc__text-container--line'>
            <p className='text-h4-medium'>Información adicional:</p>
            <p className='text-p2'>
              Puede consultar a continuación toda la información sobre nuestra
              política de protección de datos en:
              <a
                href='https://www.isciii.es/InformacionCiudadanos/Paginas/PoliticaPrivacidad.aspx'
                className='a-sub'
              >
                https://www.isciii.es/InformacionCiudadanos/Paginas/PoliticaPrivacidad.aspx
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
