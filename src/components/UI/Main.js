import React from 'react'
import MoviesGrid from '../Movies/MoviesGrid'
import RatingFilter from '../SearchBar/RatingFilter'

const Main = () => {
  return (
    <>
      <RatingFilter />
      <MoviesGrid />
    </>
  )
}

export default Main