import React, { useState, useEffect } from "react";

const ImageGallery = ({ page, perPage }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=${perPage}`
        );
        if (response.ok) {
          const data = await response.json();
          setImageUrls((prevImages) => [
            ...prevImages,
            ...data.map((image) => image.download_url),
          ]);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, perPage]);

  function getClass(i) {

    const effectiveIndex = i % 5;

    if (effectiveIndex === 0) {
      return "big";
    } else if (effectiveIndex >= 1 && effectiveIndex <= 2) {
      return "tall";
    } else {
      return "wide";
    }
  }

  return (
    <main className="photos">
      {imageUrls.map((imageUrl, index) => (
        <div className={`${getClass(index)} image-container`}>
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="image-grid"
          />
        </div>
      ))}
    </main>
  );
};

export default ImageGallery;
