// App.jsx
import React, { useState } from 'react';
import './style.css';
import ImageGallery from './ImageGallery.jsx';
import Header from './Header';


export default function App() {
  const [page, setPage] = useState(1); 
  const perPage = 50; 

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  const LoadMoreButton = ({ onClick }) => {
    return (
      <button onClick={onClick} className="load-more-button">
        Load More
      </button>
    );
  };

  return (
    <div>
      <Header />
      <ImageGallery page={page} perPage={perPage} />
      <LoadMoreButton onClick={handleLoadMore} />
    </div>
  );
}
