import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from "../../constants/constants";
import './Banner.css'
import axios from '../../axios'


const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const changeBanner = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(changeBanner);
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ''})`,
      }}
    >
      <div>
      <div className="content">
        <h1 className="title">{currentMovie ? currentMovie.title : ''}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          {currentMovie ? currentMovie.overview : ''}
        </h1>
      </div>
      <div className="fade_bottom"></div>
      </div>
    </div>
  );
};

export default Banner