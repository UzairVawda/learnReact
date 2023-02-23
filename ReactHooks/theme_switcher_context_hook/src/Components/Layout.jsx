import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Layout() {
  const { currentTheme } = useContext(ThemeContext);
  console.log(currentTheme);
  return (
    <div className="page-wrapper" style={currentTheme}>
      <header>HEADER</header>
      <main>MAIN</main>
      <footer>Footer</footer>
    </div>
  );
}
