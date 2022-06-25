import React from 'react'
import { useSelector } from 'react-redux';

import classes from './HeaderWrapper.module.css'

const HeaderWrapper = ({children}) => {

    const movies = useSelector((state) => state.movies.movies);
  const backgroundURL =
    movies.length > 1 &&
    `https://image.tmdb.org/t/p/w500${movies[0].backdrop_path}`;

  return (
    <div
      className={classes.headerContainer}
      style={{ backgroundImage: "url( " + backgroundURL + ")" }}
    >{children}</div>
  )
}

export default HeaderWrapper