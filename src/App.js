import React, { useState } from "react";
import "./style.css";
import ImageGallery from "./ImageGallery.jsx";
import Header from "./Header";

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
      {/* <img src={banner} alt='banner' className='banner'/> */}
      <div className="content">
        <div class="banner">
          <h1>Welcome to Champ18ion's Website</h1>
          <p>Made specially for aDMe {`:)`}</p>
        </div>
        <ImageGallery page={page} perPage={perPage} />
        <LoadMoreButton onClick={handleLoadMore} />
      </div>
    </div>
  );
}
