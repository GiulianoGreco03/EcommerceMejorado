import { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router';

const images = [
  '/assets/slider1.jpg',
  '/assets/slider2.jpg',
  '/assets/slider3.jpg',
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <img src={img} key={i} alt={`slide-${i}`} className="slide" />
          ))}
        </div>
      </div>

      <div className="welcome-content">
        <h1>Bienvenido a Cultivo Greco</h1>
        <p>
          Cultivá tu espacio con estilo. Descubrí nuestra selección de plantas y decoración natural.
        </p>
        <button
          className="button-default"
          onClick={() => navigate('/products')}
        >
          Ver catálogo
        </button>
      </div>
    </div>
  );
}

export default Home;
