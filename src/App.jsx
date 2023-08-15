import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieListing from './pages/MovieListing';
import MovieDetail from './pages/MovieDetail';
import WatchLater from './pages/WatchLater';
import StarredPage from './pages/StarredPage';
import AddMovie from './pages/AddMovie';
import { movies } from "./data";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<MovieListing />} />
      <Route path="/movie/:id" element={<MovieDetail movies={movies}/>} />
      <Route path="/movie/watchlater" element={<WatchLater/>} />
      <Route path="/movie/starred" element={<StarredPage/>} />
      <Route path="/movie/add" element={<AddMovie/>} />
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
