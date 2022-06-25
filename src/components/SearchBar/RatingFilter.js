import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../store/movies";

import classes from "./RatingFilter.module.css";

const RatingFilter = () => {
  const [ratingStars, setRatingStars] = useState(0);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const searchMovies = useSelector((state) => state.movies.searchMovies);

  console.log('render rating filter')

  const typeArray = searchMovies.length > 0 ? "search" : "discover";

  useEffect(() => {
    dispatch(moviesActions.filterByRating([ratingStars, typeArray]));
  }, [ratingStars, dispatch, typeArray, searchMovies, movies]);

  const changeRatingHandler = (e) => {
    if (ratingStars === parseInt(e.target.value)) {
      setRatingStars(0);
    } else {
      setRatingStars(parseInt(e.target.value));
    }
  };

  return (
    <div className={classes.ratingContainer}>
      <div className={classes.rating}>
        <label>
          <input
            type="radio"
            name="stars"
            value={1}
            checked={ratingStars === 1}
            onClick={(e) => changeRatingHandler(e)}
            readOnly
          />
          <span className={classes.icon}>★</span>
        </label>
        <label>
          <input
            type="radio"
            name="stars"
            value={2}
            checked={ratingStars === 2}
            onClick={(e) => changeRatingHandler(e)}
            readOnly
          />
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
        </label>
        <label>
          <input
            type="radio"
            name="stars"
            value={3}
            checked={ratingStars === 3}
            onClick={(e) => changeRatingHandler(e)}
            readOnly
          />
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
        </label>
        <label>
          <input
            type="radio"
            name="stars"
            value={4}
            checked={ratingStars === 4}
            onClick={(e) => changeRatingHandler(e)}
            readOnly
          />
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
        </label>
        <label>
          <input
            type="radio"
            name="stars"
            value={5}
            checked={ratingStars === 5}
            onClick={(e) => changeRatingHandler(e)}
            readOnly
          />
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
          <span className={classes.icon}>★</span>
        </label>
      </div>
    </div>
  );
};

export default RatingFilter;
