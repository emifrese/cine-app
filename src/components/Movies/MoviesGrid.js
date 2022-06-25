import React, { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./MoviesGrid.module.css";
import star from "../../assets/estrella.svg";
import calendar from "../../assets/calendario.svg";
import cross from "../../assets/circulo-cruzado.svg";

const MoviesGrid = () => {
  const movies = useSelector((state) => state.movies.ratedMovies);

  const [showDescription, setShowDescription] = useState([false, ""]);

  let mainMovie = [];
  let content = [];

  if (!showDescription[0]) {
    movies.forEach((mov, i) => {
      if (i === 0) {
        mainMovie.push(
          <div className={classes.mainMovieContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
              alt="main-movie"
            />
            <div
              className={classes.overlay}
              onClick={() => {
                setShowDescription((state) => [!state[0], mov]);
              }}
            >
              {mov.title}
            </div>
          </div>
        );
      } else if (i !== 0 && i < 9) {
        content.push(
          <div className={classes.movieContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
              alt="movie-poster"
            />
            <div
              className={classes.overlay}
              onClick={() => {
                setShowDescription((state) => [!state[0], mov]);
              }}
            >
              {mov.title}
            </div>
          </div>
        );
      }
    });
  } else {
    mainMovie.push(
      <div className={classes.mainMovieContainer}>
        <img
          src={
            `https://image.tmdb.org/t/p/w500` + showDescription[1].poster_path
          }
          alt="main-movie"
        />
      </div>
    );
    content.push(
      <div className={classes.movieDescription}>
        <h3>{showDescription[1].title}</h3>
        <button
          className={classes.closeDescriptionButton}
          onClick={() => {
            setShowDescription((state) => [!state[0]], "");
          }}
        >
          <img src={cross} alt="close-description" />
        </button>
        <figure>
          <figcaption>{showDescription[1].vote_average}</figcaption>
          <img src={star} alt="estrella" />
        </figure>
        <figure>
          <figcaption>{showDescription[1].release_date}</figcaption>
          <img src={calendar} alt="fecha" />
        </figure>
        <p>{showDescription[1].overview}</p>
      </div>
    );
  }

  return (
    <div className={classes.moviesFlexContainer}>
      {mainMovie}
      <div
        className={
          showDescription[0]
            ? classes.movieCardDescription
            : classes.asideMovieContainer
        }
      >
        {content}
      </div>
    </div>
  );
};

export default MoviesGrid;
