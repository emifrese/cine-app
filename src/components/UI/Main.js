import React from 'react'
import MoviesGrid from '../Movies/MoviesGrid'
import RatingFilter from '../SearchBar/RatingFilter'

import classes from './Main.module.css'

const Main = () => {
  return (
    <div className={classes.mainContainer}>
      <RatingFilter />
      <MoviesGrid />
    </div>
  )
}

export default Main