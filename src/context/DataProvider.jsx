import React, { createContext, useContext, useState,useEffect } from 'react'
import { movies } from "../data";

const DataContext = createContext()

const DataProvider = ({children}) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState(JSON.parse(localStorage.getItem('watchLaterVideos')) || []);

  useEffect(() => {
    localStorage.setItem('watchLaterVideos', JSON.stringify(watchLaterVideos));
  }, [watchLaterVideos]);

  const removeVideoFromWatchLater = (id) => {
    setWatchLaterVideos((prevWatchLaterVideos) =>
      prevWatchLaterVideos.filter((movie) => movie._id !== id)
    );
  };
  const toggleWatchLater = (id) => {
    if (watchLaterVideos.some((movie) => movie._id === id)) {
      setWatchLaterVideos((prevWatchLaterVideos) =>
        prevWatchLaterVideos.filter((movie) => movie._id !== id)
      );
    } else {
      const movieToAdd = movies.find((movie) => movie._id === id);
      setWatchLaterVideos((prevWatchLaterVideos) => [...prevWatchLaterVideos, movieToAdd]);
    }
  };
  return (
    <DataContext.Provider value={{watchLaterVideos,setWatchLaterVideos,removeVideoFromWatchLater,toggleWatchLater}}> 
        {children}

    </DataContext.Provider>
  )
}
export const useData = () => useContext(DataContext);

export default DataProvider