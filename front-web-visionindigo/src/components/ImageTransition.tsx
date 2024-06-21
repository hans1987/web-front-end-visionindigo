import React, { useState, useEffect } from 'react';
import './../App.css'

interface ImageTransitionProps {
    images: string[];
}

const ImageTransition: React.FC<ImageTransitionProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scale, setScale] = useState(1);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true);
            setScale(1.2); // Escala inicial para hacer zoom
            setTimeout(() => {
                setScale(1); // Devuelve a la escala original
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 1000); // Duración del efecto de zoom
            setTimeout(() => {
                setTransitioning(false);
            }, 2000); // Tiempo total de la transición
        }, 5000); // Intervalo entre transiciones

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="image-container">
            <div className={`image ${transitioning ? 'zooming' : ''}`} style={{ transform: `scale(${scale})` }}>
                <img src={images[currentIndex]} alt="Slideshow" />
            </div>
        </div>
    );
};

export default ImageTransition;
