import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [starred, setStarred] = useState(false);
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  const handleStarClick = () => {
    setStarred(!starred);
  };

  const handleWatchlistClick = () => {
    setAddedToWatchlist(!addedToWatchlist);
  };

  return (
    <div className="movie-card">
      <img src={movie.imageURL} alt={movie.title} />
      <div className="description-overlay">
      <h2>{movie.title}</h2>
      
      <p>{movie.summary}</p>
      <div className="btn-container">
      <button onClick={handleStarClick}>
        {starred ? 'Starred' : 'Star'}
      </button>
      <button onClick={handleWatchlistClick}>
        {addedToWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
      </button>
      </div>
      
      </div>
    </div>
  );
};

export default MovieCard;
