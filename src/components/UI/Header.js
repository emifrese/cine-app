import React from 'react'
import { useSelector } from 'react-redux'
import Title from '../Header/Title'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'

import classes from './Header.module.css'

const Header = () => {

  const movies = useSelector(state => state.movies.movies)
  console.log(movies)
  const backgroundURL = movies.length > 1 && `https://image.tmdb.org/t/p/w500${movies[0].backdrop_path}`

  return (
    <div className={classes.headerContainer} style={{backgroundImage:'url( ' + backgroundURL + ')'}}>
      <img src={backgroundURL} alt='background' className={classes.backgroundImage}/>
    <NavBar />
    <Title />
    <SearchBar />
    </div>
  )
}

export default Header