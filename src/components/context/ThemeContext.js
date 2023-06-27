import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const localeTheme = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(localeTheme || "bg1");

  const themeCtx = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
