import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Fetch images when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list');
        if (response.ok) {
          const data = await response.json();
          setImageUrls(data.map((image) => image.download_url));
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  function getClass(i) {
    // Calculate the effective index within each repeating pattern
    const effectiveIndex = i % 5;
  
    if (effectiveIndex === 0) {
      return 'big';
    } else if (effectiveIndex >= 1 && effectiveIndex <= 2) {
      return 'tall';
    } else {
      return 'wide';
    }
  }
  
  

  return (
    <main className="photos">
      
      {imageUrls.map((imageUrl, index) => (
        <div 
        className={`${getClass(index)} image-container`}
       
    >
       <img key={index} src={imageUrl} alt={`Image ${index}`} className="image-grid" />
    </div>
        
      ))}

    </main>
   
  );
};

export default ImageGallery;