import React, { useRef } from "react";
import clienteAxios from "../../config/axios";

import classes from "./SearchBar.module.css";
import searchIcon from "../../assets/busqueda.svg";
import { useDispatch } from "react-redux";
import { moviesActions } from "../../store/movies";

const SearchBar = () => {
  const enteredMovieInputRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredMovie = enteredMovieInputRef.current.value;

    const config = {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    };

    if (enteredMovie.trim() === "") {
      dispatch(moviesActions.addSearchMovies([]));
    } else {
      try {
        const { data } = await clienteAxios(
          `/search/movie?query=${enteredMovie}`,
          config
        );

        const { results } = data;

        dispatch(moviesActions.addSearchMovies(results));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      className={classes.searchBarContainer}
      onSubmit={(e) => submitHandler(e)}
    >
      <label className={classes.searchBarLabel}>
        <img
          src={searchIcon}
          alt="search-bar"
          className={classes.searchBarImg}
        />
        <input
          type="text"
          className={classes.searchBarInput}
          placeholder="Search for a movie..."
          ref={enteredMovieInputRef}
        />
      </label>
    </form>
  );
};

export default SearchBar;
