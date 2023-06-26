import React, { useContext } from "react";
import classes from "./Header.module.css";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeThemeHandler = (data) => {
    setTheme(data);
  };

  return (
    <div className={classes.navbar}>
      <div
        className={`${classes.navbarContent} ${
          theme === "bg5" ? classes.activeNavbar : ""
        }`}
      >
        <h1>todo app</h1>
        <div className={classes.theme}>
          <h3>Themes</h3>
          <div>
            <button
              onClick={() => changeThemeHandler("bg1")}
              className={`${classes.btn1} ${
                theme === "bg1" ? classes.activeBtn : ""
              }`}
            ></button>
            <button
              onClick={() => changeThemeHandler("bg2")}
              className={`${classes.btn2} ${
                theme === "bg2" ? classes.activeBtn : ""
              }`}
            ></button>
            <button
              onClick={() => changeThemeHandler("bg3")}
              className={`${classes.btn3} ${
                theme === "bg3" ? classes.activeBtn : ""
              }`}
            ></button>
            <button
              onClick={() => changeThemeHandler("bg4")}
              className={`${classes.btn4} ${
                theme === "bg4" ? classes.activeBtn : ""
              }`}
            ></button>
            <button
              onClick={() => changeThemeHandler("bg5")}
              className={`${classes.btn5} ${
                theme === "bg5" ? classes.activeBtn : ""
              }`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
