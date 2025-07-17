import { useEffect, useState } from 'react';
import './Home.css';

const images = [
  '/assets/slider1.jpg',
  '/assets/slider2.jpg',
  '/assets/slider3.jpg',
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, i) => (
          <img src={img} key={i} alt={`slide-${i}`} className="slide" />
        ))}
      </div>
    </div>
  );
}

export default Home;