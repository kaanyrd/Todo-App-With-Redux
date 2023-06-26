import React, { useContext } from "react";
import "../../App.css";
import ThemeContext from "./ThemeContext";

function ThemeWrapper({ children }) {
  const { theme } = useContext(ThemeContext);

  return <div className={`app ${theme}`}>{children}</div>;
}

export default ThemeWrapper;
