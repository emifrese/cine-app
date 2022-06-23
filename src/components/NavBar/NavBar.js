import React from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav_ul}>
        <li className={classes.navUlTitle}>fliixus</li>
        <li>Browse+</li>
      </ul>
      <ul className={classes.nav_ul}>
        <li>Login</li>
        <li className={classes.navUlSignUp}>Sign Up</li>
      </ul>
    </nav>
  );
};

export default NavBar;
