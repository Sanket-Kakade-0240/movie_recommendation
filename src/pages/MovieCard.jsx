import React, { useState } from 'react';
import { useData } from '../context/DataProvider';

const MovieCard = ({ movie }) => {
  const [starred, setStarred] = useState(false);
  const { watchLaterVideos, toggleWatchLater } = useData();

  const handleStarClick = () => {
    setStarred(!starred);
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
          {/* <button onClick={handleWatchlistClick}>
            {watchLaterVideos.some((m) => m._id === movie._id) ? 'Added to Watchlist' : 'Add to Watchlist'}
          </button> */}
          <button onClick={() => toggleWatchLater(movie.id)}>
          {watchLaterVideos.some((m) => m._id === movie.id)
          ? 'Added to Watchlist'
          : 'Add to Watchlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

// import React, {  useState } from 'react';
// import { useData } from '../context/DataProvider';

// const MovieCard = ({ movie }) => {
//   const [starred, setStarred] = useState(false);
//   const [addedToWatchlist, setAddedToWatchlist] = useState(false);
//   const [watchLaterVideos,toggleWatchLater] = useData();
//   const handleStarClick = () => {
//     setStarred(!starred);
//   };

//   const handleWatchlistClick = () => {
//     setAddedToWatchlist(!addedToWatchlist);
//   };

//   return (
//     <div className="movie-card">
//       <img src={movie.imageURL} alt={movie.title} />
//       <div className="description-overlay">
//       <h2>{movie.title}</h2>
      
//       <p>{movie.summary}</p>
//       <div className="btn-container">
//       <button onClick={handleStarClick}>
//         {starred ? 'Starred' : 'Star'}
//       </button>
      
//       <button onClick={() => toggleWatchLater(movie._id)}>
//         {watchLaterVideos.some((m) => m._id === movie._id) ? 'Added to Watchlist' : 'Add to Watchlist'}
//       </button>
      
//       {/* <button onClick={handleWatchlistClick}>
//         {addedToWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
//       </button> */}
//       {/* onClick={() => toggleWatchLater(video._id)}>
//                   {watchLaterVideos.some((v) => v._id === video._id) ? <ClockFill/> : <Clock/>} */}
//       </div>
      
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
