import {useState, useEffect} from 'react';

function ImageService({imageUrl, desiredHeight}) {
  const [imageStyle, setImageStyle] = useState({});

  useEffect(() => {
    // Obtén la imagen de fondo
    const backgroundImage = new Image();
    backgroundImage.src = imageUrl;

    // Espera a que la imagen se cargue
    backgroundImage.onload = function () {
      const imageWidth = backgroundImage.width;
      const imageHeight = backgroundImage.height;

      const aspectRatio = imageWidth / imageHeight;

      // Calcula el ancho proporcional según la altura deseada
      const calculatedWidth = desiredHeight * aspectRatio;

      setImageStyle({
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        height: `${desiredHeight}px`,
        width: `${calculatedWidth}px`,
      });
    };
  }, [imageUrl, desiredHeight]);

  return (
    <div
      className='image-service'
      style={imageStyle}
    ></div>
  );
}

export default ImageService;
