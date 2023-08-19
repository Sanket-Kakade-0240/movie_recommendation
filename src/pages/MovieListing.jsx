import React ,{ useState , useEffect } from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import MovieCard from './MovieCard';
import { movies } from "../data" ;
import AddMovie from './AddMovie';
import { Link } from 'react-router-dom';

const Container = styled.div`
padding: 1rem;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Add = styled.button`
padding: 0.5rem 1rem;
background-color: #36332b;
border: none;
border-radius: 5px;
color: white;
cursor: pointer;
`
const Bottom = styled.div`
`;

const MovieListing = () => {
    const [filterGenre, setFilterGenre] = useState('All');
    const [filterYear, setFilterYear] = useState('Release Year');
    const [filterRating, setFilterRating] = useState('Rating');
    const [searchQuery, setSearchQuery] = useState('');
    const [allMovies, setAllMovies] = useState(movies);
    const [showAddMovieForm, setShowAddMovieForm] = useState(false);

    useEffect(() => {
      const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
      setAllMovies(storedMovies);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('movies', JSON.stringify(allMovies));
    }, [allMovies]);
  
    const handleMovieAdded = newMovie => {
      setAllMovies(prevMovies => [...prevMovies, newMovie]);
      setShowAddMovieForm(false);
    };
    const handleCancelAddMovie = () => {
        setShowAddMovieForm(false);
      };
    const filteredMovies = allMovies.filter(movie => {
    const matchesGenre = filterGenre === 'All' || movie.genre.includes(filterGenre);
    const matchesYear = filterYear === 'Release Year' || movie.year.toString() === filterYear;
    const matchesRating = filterRating === 'Rating' || movie.rating.toString() === filterRating;
    return matchesGenre && matchesYear && matchesRating;
    });

    const searchedMovies = filteredMovies.filter(movie => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return (
          movie.title.toLowerCase().includes(lowerCaseSearchQuery) ||
          movie.cast.some(actor => actor.toLowerCase().includes(lowerCaseSearchQuery)) ||
          movie.director.toLowerCase().includes(lowerCaseSearchQuery)
        );
      });

    const genreArr = ["All Genre","Drama","Crime","Action","Adventure","Fantasy","Romance","Sci-Fi","Biography"]
    const yearArr = ['Release Year',1994,1992,2008,2003,2010,1999,1991,2001,]
    const ratingArr = ['Rating',5,6,7,8,9,10]

    return (
    <div>
        <Navbar onSearch={setSearchQuery} />
        <Container>
            <Top>
            <h2>Product</h2>
                <select value={filterGenre} onChange={e => setFilterGenre(e.target.value)}>
                    {genreArr.map(genre => <option value={genre}> {genre} </option>)}
                </select>
                <select value={filterYear} onChange={e => setFilterYear(e.target.value)}>
                    {yearArr.map(year => <option value={year}> {year} </option>)}
                </select>
                <select value={filterRating} onChange={e => setFilterRating(e.target.value)}>
                    {ratingArr.map(rating => <option value={rating}> {rating} </option>)}
                </select>
                <Add onClick={() => setShowAddMovieForm(true)}>New</Add>
                {showAddMovieForm && <AddMovie onMovieAdded={handleMovieAdded} onClose={handleCancelAddMovie} />}
            </Top>
            {/* <Bottom>
            {searchedMovies.map(movie => (
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                <MovieCard key={movie.id} movie={movie} /> 
                </Link>
            ))}
            </Bottom> */}
            <Bottom>
            {searchedMovies.map(movie => (
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }} key={movie.id}>
            <MovieCard movie={movie} />
            </Link>
            ))}
            </Bottom>
        </Container>
    </div>
  )
}

export default MovieListing