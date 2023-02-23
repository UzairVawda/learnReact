import React, { useContext } from "react";
import { BsFillSunFill, BsSun } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeContext";

export default function Button() {
  const { handleClick, isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={isDarkTheme ? "button-wrapper-light" : "button-wrapper-dark"}
    >
      {isDarkTheme ? (
        <BsSun size={32} onClick={handleClick} />
      ) : (
        <BsFillSunFill size={32} onClick={handleClick} />
      )}
    </div>
  );
}
