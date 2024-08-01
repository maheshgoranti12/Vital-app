import React from 'react';


import ImageSlider from './ImageSlider';

const Imageslide = () => {
  const images = [
     'image1.jpg',
      'logo.png',
      'vitalcode.png',
   
  ];

  return (
    <div className="Imageslide">
      <h1>Auto Slide Image Carousel</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default Imageslide;
