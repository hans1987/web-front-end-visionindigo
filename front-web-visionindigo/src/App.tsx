import { useEffect } from 'react';
import { importAllImages } from './utils/utils.general';
import Navbar from './components/navbar/Navbar';

const App = () => {


  const cambiarImagenDeFondo = (nuevaImagen: string): void => {
    document.documentElement.style.setProperty('--imagen-de-fondo', `url(${nuevaImagen})`);
  };

  const generarIndiceAleatorio = (longitud: number): number => {
    return Math.floor(Math.random() * longitud);
  };

  const loadImages = async () => {
    const importedImages = await importAllImages();
    if (importedImages.length > 0) {
      setInterval(() => {
        const indiceAleatorio = generarIndiceAleatorio(importedImages.length);
        cambiarImagenDeFondo(importedImages[indiceAleatorio]);
      }, 5000);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>

      <div className="container-fluid">
        <Navbar />
        <div className="container-img">
          <div className="container-text">
            
          </div>
        </div>
      </div>
    </>

  );
};

export default App;
