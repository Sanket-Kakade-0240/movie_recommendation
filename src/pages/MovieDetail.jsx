import { useParams } from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import styled from "styled-components";

const Container = styled.div`
padding: 3rem;
`;
const DetailCard = styled.div`
padding: 1rem;
display: flex;
height: 70vh;
width: 98%;
border-radius: 8px;
box-shadow: 2px 5px 3px #eee6e6;
border: 1px solid #ddd;

`;
const ImageCard = styled.div`
padding: 1rem;
flex: 1;
`;
const Details = styled.div`
padding: 1rem;
flex: 3;
`;
const Button = styled.button`
color: white;
background-color: #36332b;
padding: 8px 15px;
border: none;
border-radius: 5px;
cursor: pointer;
`
const MovieDetail = ({movies}) => {
  const [starred, setStarred] = useState(false);
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));
  
  if (!movie) {
    return <p>Movie not found.</p>;
  }
  
  const handleStarClick = () => {
    setStarred(!starred);
  };

  const handleWatchlistClick = () => {
    setAddedToWatchlist(!addedToWatchlist);
  };
  return (
    <div>
      <Navbar/>
      <Container>
        <DetailCard>
          <ImageCard>
            <img src={movie.imageURL} alt={movie.id} width={"100%"} height={"100%"} />
          </ImageCard>
          <Details>
            <h1>{movie.title}</h1>
            <div style={{ textAlign: "left", marginLeft: "1rem" }}>
              <p>Description: {" "} {movie.summary}</p>
              <p>Year: {" "}{movie.year}</p>
              <p>Genre: {" "}{movie.genre}</p>
              <p>Ratings: {" "}{movie.ratings}</p>
              <p>Director: {" "}{movie.director}</p>
              <p>Writer: {" "}{movie.writer}</p>
              <p>Cast: {" "}{movie.cast}</p>
              <div className="btn-container">
                <Button onClick={handleStarClick}>
                  {starred ? 'Starred' : 'Star'}
                </Button>
                <Button onClick={handleWatchlistClick}>
                  {addedToWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
                </Button>
              </div>              
            </div>
          </Details>
        </DetailCard>
      </Container>
    </div>
  )
}

export default MovieDetail