import {useRef, useEffect} from 'react';
import '../styles/components/ParallaxEffect.scss';

const ParallaxEffect002 = () => {
  const images = [0, 1, 2, 3, 4];

  const parallaxContainer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxContainer.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 5;
      const y = (e.clientY / window.innerHeight - 0.5) * 2.5;

      const layers = parallaxContainer.current.querySelectorAll('.layer');

      layers.forEach((layer, index) => {
        layer.style.transition = 'none';

        let moveX = x * (index + 1) * 5;
        let moveY = y * (index + 1) * 5;

        if (index === 1) {
          moveX *= 0.3;
          moveY *= 0.3;
        } else if (index === 2) {
          moveX *= 0.6;
          moveY *= 0.2;
        } else if (index === 3) {
          moveX *= -0.2;
          moveY *= -0.2;
        } else if (index === 4) {
          moveX *= -0.5;
          moveY *= 0.3;
        }

        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    const handleMouseLeave = () => {
      if (!parallaxContainer.current) return;

      const layers = parallaxContainer.current.querySelectorAll('.layer');

      layers.forEach((layer) => {
        layer.style.transition = 'transform 0.5s ease';
        layer.style.transform = 'translate(0, 0)';
      });
    };

    if (parallaxContainer.current) {
      parallaxContainer.current.addEventListener('mousemove', handleMouseMove);
      parallaxContainer.current.addEventListener(
        'mouseleave',
        handleMouseLeave
      );
    }

    return () => {
      if (parallaxContainer.current) {
        parallaxContainer.current.removeEventListener(
          'mousemove',
          handleMouseMove
        );
        parallaxContainer.current.removeEventListener(
          'mouseleave',
          handleMouseLeave
        );
      }
    };
  }, []);

  return (
    <div
      className='parallax-container'
      ref={parallaxContainer}
    >
      {images.map((index) => (
        <div
          key={index}
          className={`layer layer${index + 6}`}
        ></div>
      ))}
    </div>
  );
};

export default ParallaxEffect002;
