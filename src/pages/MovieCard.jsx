import React, { useState } from "react";
import { useData } from "../context/DataProvider";

const MovieCard = ({ movie }) => {
  const [starred, setStarred] = useState(false);
  const { watchList, toggleWatchList } = useData();

  const handleStarClick = () => {
    setStarred(!starred);
  };
  console.log("movie in MovieCard", movie);
  console.log("watchList in MovieCard", watchList);
  console.log("watch -", watchList);
  return (
    <div className="movie-card">
      <img src={movie.imageURL} alt={movie.title} />
      <div className="description-overlay">
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <div className="btn-container">
          <button onClick={handleStarClick}>
            {starred ? "Starred" : "Star"}
          </button>

          <button onClick={() => toggleWatchList(movie._id)}>
            {watchList.some((m) => m._id === movie._id)
              ? "Added to Watchlist"
              : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
