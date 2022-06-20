import React, { useState } from "react";

import classes from "./SearchBar.module.css";
import searchIcon from "../../assets/busqueda.svg";

const SearchBar = () => {

    const [enteredMovie, setEnteredMovie] = useState('')
    console.log(enteredMovie)

  return (
    <div className={classes.search_bar_container}>
      <label className={classes.search_bar_label}>
        <img src={searchIcon} alt="search-bar" className={classes.search_bar_img}/>
        <input type="text" className={classes.search_bar_input} placeholder='Search for a movie...' value={enteredMovie} onChange={(e) => setEnteredMovie(e.target.value)}/>
      </label>
    </div>
  );
};

export default SearchBar;
