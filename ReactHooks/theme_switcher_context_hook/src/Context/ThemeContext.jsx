import React, { createContext, useState, useEffect } from "react";

const themes = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  dark: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
};

const initialState = {
  currentTheme: themes.light,
  handleClick: () => {},
  isDarkTheme: false,
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
    setDarkTheme(localTheme);
  }, []);

  const handleClick = () => {
    const updateIsDarkTheme = !isDarkTheme;
    localStorage.setItem("isDarkTheme", JSON.stringify(updateIsDarkTheme));
    setDarkTheme(updateIsDarkTheme !== null ? updateIsDarkTheme : false);
  };

  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ currentTheme, handleClick, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
