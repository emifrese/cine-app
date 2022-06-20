import React, { useState } from "react";

import classes from "./RatingFilter.module.css";

const RatingFilter = () => {
  const [ratingStars, setRatingStars] = useState("");

  const changeRatingHandler = (e) => {
    if (ratingStars === e.target.value) {
      setRatingStars("");
    } else {
      setRatingStars(e.target.value);
    }
  };

  console.log(ratingStars);

  return (
    <div className={classes.rating}>
      <label>
        <input
          type="radio"
          name="stars"
          value="1"
          checked={ratingStars === "1"}
          onClick={(e) => changeRatingHandler(e)}
          readOnly
        />
        <span className={classes.icon}>★</span>
      </label>
      <label>
        <input
          type="radio"
          name="stars"
          value="2"
          checked={ratingStars === "2"}
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
          value="3"
          checked={ratingStars === "3"}
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
          value="4"
          checked={ratingStars === "4"}
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
          value="5"
          checked={ratingStars === "5"}
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
  );
};

export default RatingFilter;
