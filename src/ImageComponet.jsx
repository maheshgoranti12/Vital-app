import React, { useState, useEffect } from 'react';

function ImageComponent() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch('http://localhost:8080/manage/api/getImage/2');

        if (!response.ok) {
          throw new Error('Image not found');
        }

        const buffer = await response.arrayBuffer();
        const base64Flag = 'data:image/jpeg;base64,';
        const imageStr = arrayBufferToBase64(buffer);
        setImageSrc(base64Flag + imageStr);
      } catch (error) {
        console.error('Error fetching the image:', error);
      }
    }

    fetchImage();
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <>
      {imageSrc && <img src={imageSrc} alt="icons" />}
    </>
  );
}

export default ImageComponent;