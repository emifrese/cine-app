import React from "react";
import Title from "../Header/Title";
import NavBar from "../NavBar/NavBar";
import HeaderWrapper from "../PagesWrappers/HeaderWrapper";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar />
      <Title />
      <SearchBar />
    </HeaderWrapper>
  );
};

export default Header;
