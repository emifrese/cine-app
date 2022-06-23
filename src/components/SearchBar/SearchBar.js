import React, { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";

import classes from "./SearchBar.module.css";
import searchIcon from "../../assets/busqueda.svg";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../store/movies";

const SearchBar = () => {

    const [enteredMovie, setEnteredMovie] = useState('')
    const searchedMovies = useSelector(state => state.movies.searchMovies)
    const dispatch = useDispatch()

    console.log(searchedMovies)

    useEffect(() => {
      if(enteredMovie.trim() === ''){
        dispatch(moviesActions.addSearchMovies([]))
      }
    },[enteredMovie, dispatch])

    const submitHandler = async (e) => {
      e.preventDefault()

      const config = {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      }

      try {
        const {data} = await clienteAxios(`/search/movie?query=${enteredMovie}`, config)

        const {results} = data;

        dispatch(moviesActions.addSearchMovies(results))
      } catch(error) {
        console.log(error)
      }

    }

  return (
    <form className={classes.search_bar_container} onSubmit={(e) => submitHandler(e)}>
      <label className={classes.search_bar_label}>
        <img src={searchIcon} alt="search-bar" className={classes.search_bar_img}/>
        <input type="text" className={classes.search_bar_input} placeholder='Search for a movie...' value={enteredMovie} onChange={(e) => setEnteredMovie(e.target.value)}/>
      </label>
    </form>
  );
};

export default SearchBar;
