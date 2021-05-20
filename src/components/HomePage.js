import React from 'react';
import Header from './Header/Header';
/* import $ from "jquery"; */
import './HomePage.css';
import imageMovieProject from '../assets/images/card/movie-project.jpg';

export function HomePage() {
  return (
    <>
        <Header />
        <div className="container-homepage">
          <a className="card-link" href="/movieproject">
            <div className="card">
              <div className="container-card-image">
                <img className="image" src={imageMovieProject} alt='card'/>
              </div>
              <div className="container-card-bottom">
                <p>Movie Project</p>
              </div>
            </div>
          </a>
        </div>
    </>
  );
}


