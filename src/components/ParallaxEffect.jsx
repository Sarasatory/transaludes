import {useRef, useEffect} from 'react';
import '../styles/components/ParallaxEffect.scss';

const ParallaxEffect = () => {
  const parallaxContainer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 5;
      const y = (e.clientY / window.innerHeight - 0.5) * 2.5;

      const layers = parallaxContainer.current.querySelectorAll('.layer');

      layers.forEach((layer, index) => {
        layer.style.transition = 'none'; // Restablecer la transición en cada ciclo
        layer.style.transition = 'transform 0.5s ease';

        // Ajustar el cálculo de moveX para cada capa
        let moveX = x * (index + 1) * 5;
        if (index === 1) {
          moveX *= 0.3; // Mover hacia la derecha
        } else if (index === 2) {
          moveX *= 0.6; // Mover hacia la derecha
        } else if (index === 3) {
          moveX *= -0.2; // Mover hacia la izquierda
        } else if (index === 4) {
          moveX *= -0.5; // Mover hacia la izquierda
        }

        // const moveY = y * (index + 1) * 2.5;
        let moveY = y * (index + 1) * 5;
        if (index === 1) {
          moveY *= 0.3;
        } else if (index === 2) {
          moveY *= 0.2;
        } else if (index === 3) {
          moveY *= -0.2;
        } else if (index === 4) {
          moveY *= 0.3;
        }

        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    const handleMouseLeave = () => {
      const layers = parallaxContainer.current.querySelectorAll('.layer');

      layers.forEach((layer) => {
        layer.style.transition = 'transform 0.5s ease';
        layer.style.transform = 'translate(0, 0)';
      });
    };

    parallaxContainer.current.addEventListener('mousemove', handleMouseMove);
    parallaxContainer.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parallaxContainer.current.removeEventListener(
        'mousemove',
        handleMouseMove
      );
      parallaxContainer.current.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div
      className='parallax-container'
      ref={parallaxContainer}
    >
      <div className='layer layer1'></div>
      <div className='layer layer2'></div>
      <div className='layer layer3'></div>
      <div className='layer layer4'></div>
      <div className='layer layer5'></div>
    </div>
  );
};

export default ParallaxEffect;
