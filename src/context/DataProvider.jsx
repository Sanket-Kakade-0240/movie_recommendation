import React, { createContext, useContext, useState, useEffect } from "react";
import { movies } from "../data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || movies
  );
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [allMovies, watchList]);

  const removeFromWatchList = (id) => {
    setWatchList((prevWatchList) =>
      prevWatchList.filter((movie) => movie._id !== id)
    );
  };
  const toggleWatchList = (id) => {
    if (watchList.some((movie) => movie._id === id)) {
      setWatchList((prevWatchList) =>
        prevWatchList.filter((movie) => movie._id !== id)
      );
    } else {
      const movieToAdd = movies.find((movie) => movie._id === id);
      setWatchList((prevWatchList) => [...prevWatchList, movieToAdd]);
    }
  };
  console.log("watchList in DataProvider", watchList);

  return (
    <DataContext.Provider
      value={{
        allMovies,
        setAllMovies,
        watchList,
        setWatchList,
        removeFromWatchList,
        toggleWatchList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

export default DataProvider;
