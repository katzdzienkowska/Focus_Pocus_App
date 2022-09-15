import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import './theme-button.css';

const ToggleBtn = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <button
      id='light-or-dark-mode' 
      aria-label='changeLightOrDarkMode'
      type="button"
      onClick={toggleTheme}
      className={theme ? "button-dark-mode" : "button-light-mode"}>
      {theme ? <FaSun id='sun' /> : <FaMoon id='moon' />}
    </button>

  )
}

export default ToggleBtn;