import React, { useState } from "react";
import i1 from '../../assets/images/image1.png';
import i2 from '../../assets/images/image2.png'
import { GoDotFill } from "react-icons/go";
const ImageGallery = () => {
  const images = [
    i1,
    i2,
    i2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <img src={images[currentIndex]} alt="Gallery" className="w-48 h-48 rounded-lg shadow-lg" />
      <div className="flex space-x-4">
        <button onClick={prevImage} className="   ">
          <div className="rounded"><GoDotFill /></div>
        </button>
        <button onClick={nextImage} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
        <GoDotFill />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
