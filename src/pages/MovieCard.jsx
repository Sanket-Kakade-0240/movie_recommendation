import React, { useState } from 'react';
import { useData } from '../context/DataProvider';

const MovieCard = ({ movie }) => {
  const [starred, setStarred] = useState(false);
  const { watchList, toggleWatchList } = useData();

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

          <button onClick={() => toggleWatchList(movie.id)}>
          {watchList.some((m) => m._id === movie.id)
          ? 'Added to Watchlist'
          : 'Add to Watchlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
          // {/* <button onClick={handleWatchlistClick}>
          //   {watchList.some((m) => m._id === movie._id) ? 'Added to Watchlist' : 'Add to Watchlist'}
          // </button> */}
// import React, {  useState } from 'react';
// import { useData } from '../context/DataProvider';

// const MovieCard = ({ movie }) => {
//   const [starred, setStarred] = useState(false);
//   const [addedToWatchlist, setAddedToWatchlist] = useState(false);
//   const [watchList,toggleWatchList] = useData();
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
      
//       <button onClick={() => toggleWatchList(movie._id)}>
//         {watchList.some((m) => m._id === movie._id) ? 'Added to Watchlist' : 'Add to Watchlist'}
//       </button>
      
//       {/* <button onClick={handleWatchlistClick}>
//         {addedToWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
//       </button> */}
//       {/* onClick={() => toggleWatchList(video._id)}>
//                   {watchList.some((v) => v._id === video._id) ? <ClockFill/> : <Clock/>} */}
//       </div>
      
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
