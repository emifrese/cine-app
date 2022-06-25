import React from "react";
import { useSelector } from "react-redux";

import classes from './Footer.module.css'

const Footer = () => {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies);
  const backgroundURL =
    movies.length > 1 &&
    `https://image.tmdb.org/t/p/w500${movies[1].backdrop_path}`;

  return (
    <div
      className={classes.footerContainer}
      style={{ backgroundImage: "url( " + backgroundURL + ")" }}
    >
    </div>
  );
};

export default Footer;
