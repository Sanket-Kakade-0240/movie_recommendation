import React from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import { useData } from '../context/DataProvider';
// import { movies } from "../data";

const Container = styled.div`
padding: 1rem;
`;

const WatchLater = () => {
  const {watchLaterVideos,removeVideoFromWatchLater} = useData();

  return (
    <div>
  <Navbar />
  <Container>
    {watchLaterVideos.length === 0 ? (
      <p>No videos added to watch later.</p>
    ) : (
      watchLaterVideos.map((movie) => (
        <div className="movie-card" key={movie._id}>
          <img src={movie.imageURL} alt={movie.title} />
          <div className="description-overlay">
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <div className="btn-container">
              <button></button>
              {/* <button onClick={handleStarClick}>
                {starred ? 'Starred' : 'Star'}
              </button> */}
              <button onClick={() => removeVideoFromWatchLater(movie._id)}>
                {watchLaterVideos.some((m) => m._id === movie._id)
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

// {/* {watchLaterVideos.length === 0 ? (
//             <p>No videos added to watch later.</p>
//           ) : (
//             <List>
//               {watchLaterVideos.map((video) => (
//                 <Card key={video._id}>
//                   <img src={video.thumbnail} alt={video.category} width={200} />
//                   <Description>
//                   <ProfileIcon src={video.thumbnail} />
//                   <Info>
//                   <b>{video.title}</b>
//                   <p>{video.views}|{video.creator}</p>
//                   </Info>
//                   </Description>
//                   <WatchLaterIcon onClick={() => removeVideoFromWatchLater(video._id)}>
//                   {watchLaterVideos.some((v) => v._id === video._id) ? <ClockFill/> : <Clock/>}
//                   </WatchLaterIcon>
//                 </Card>
//               ))}
//             </List>
//           )} */}
//       {/* <button onClick={handleWatchlistClick}>
//         {addedToWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
//       </button> */}
//       {/* onClick={() => toggleWatchLater(video._id)}>
//                   {watchLaterVideos.some((v) => v._id === video._id) ? <ClockFill/> : <Clock/>} */}