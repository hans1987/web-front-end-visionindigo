import { useState, useEffect } from 'react';
//import ImageTransition from './components/ImageTransition';
import { importAllImages } from './utils/utils.general';

const App = () => {
  const [images, setImages] = useState<string[]>([]);

  const loadImages = async () => {
    const importedImages = await importAllImages();
    setImages(importedImages);
  };

  useEffect(() => {

    loadImages();
  }, []);

  return (
    <div className="container-fluid">
      <div className="container-img" style={{ backgroundImage: `url(${images[68]})` }}>
        <div className="container-text">
          <label className='text-white'><b>Casa habitacion</b></label>
          <p className='text-white'>Casa hecha a mano de los mejores panaderos del mundo.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
