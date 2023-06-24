import React, { useState } from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <h1>todo app</h1>
        <div className={classes.theme}>
          <h3>Themes</h3>
          <div>
            <button className={`${classes.btn1} ${classes.activeBtn}`}>
              1
            </button>
            <button className={classes.btn2}>2</button>
            <button className={classes.btn3}>3</button>
            <button className={classes.btn4}>4</button>
            <button className={classes.btn5}>5</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
