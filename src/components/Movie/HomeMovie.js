import '../../App.css';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Header from '../Header/Header';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eeaf9f1ca0c902baa964c32961d752d4";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=eeaf9f1ca0c902baa964c32961d752d4&language=en-US&query=";
/* const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=eeaf9f1ca0c902baa964c32961d752d4&language=en-US";
const MOVIE_GENRE_API = "https://api.themoviedb.org/3/discover/movie?api_key=eeaf9f1ca0c902baa964c32961d752d4&with_genres=";
const IMG_API = "https://image.tmdb.org/t/p/w1280"; */

export function HomeMovie() {
  const [movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <Header />
      <div className="header-title">Movie Project</div>
      <div className="search-bar">
        <form className="search-movie" onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
        </form>
      </div>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
  
}
