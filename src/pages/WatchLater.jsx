import React from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import { useData } from '../context/DataProvider';
// import { movies } from "../data";

const Container = styled.div`
padding: 1rem;
`;

const WatchLater = () => {
  const {watchList,removeFromWatchList} = useData();
  return (
    <div>
  <Navbar />
  <Container>
    <h1>Watch List</h1>
    {watchList.length === 0 ? (
      <p>No videos added to watch later.</p>
    ) : (
      watchList.map((movie) => (
        <div className="movie-card" key={movie._id}>
          <img src={movie.imageURL} alt={movie.title} />
          <div className="description-overlay">
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <div className="btn-container">
              <button>Star</button>
              {/* <button onClick={handleStarClick}>
                {starred ? 'Starred' : 'Star'}
              </button> */}
              <button onClick={() => removeFromWatchList(movie._id)}>
                {watchList.some((m) => m._id === movie._id)
                  ? 'Remove'
                  : 'Add to Watchlist'}
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </Container>
</div>
  )
}

export default WatchLater
