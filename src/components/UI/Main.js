import React from "react";
import MoviesGrid from "../Movies/MoviesGrid";
import MainWrapper from "../PagesWrappers/MainWrapper";
import RatingFilter from "../SearchBar/RatingFilter";

const Main = () => {
  console.log("render main");
  return (
    <MainWrapper>
      <RatingFilter />
      <MoviesGrid />
    </MainWrapper>
  );
};

export default Main;
