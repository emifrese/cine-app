import React from "react";
import { useSelector } from "react-redux";

import classes from "./MoviesGrid.module.css";

const MoviesGrid = () => {
  const movies = useSelector((state) => state.movies.ratedMovies);

  const imgURL =
    movies.length > 0 &&
    `https://image.tmdb.org/t/p/w500${movies[0].poster_path}`;

  let content = [];
  movies.forEach((mov, i) => {
    if (i !== 0 && i < 9) {
      const areas = [
        "1 / 3 / 3 / 4",
        "1 / 4 / 3 / 5",
        "1 / 5 / 3 / 6",
        "1 / 6 / 3 / 7",
        "3 / 3 / 5 / 4",
        "3 / 4 / 5 / 5",
        "3 / 5 / 5 / 6",
        "3 / 6 / 5 / 7",
      ];
      content.push(
        <div style={{gridArea: areas[i - 1]}}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
            alt="movie-poster"
          />
        </div>
      );
    }
  });

  return (
    <div className={classes.moviesGridContainer}>
      <div style={{gridArea: "1 / 1 / 5 / 3"}}>Main Movie</div>
      {content}
    </div>
  );
};

export default MoviesGrid;
