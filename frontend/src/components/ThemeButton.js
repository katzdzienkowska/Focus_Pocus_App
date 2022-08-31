import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import {FaSun, FaMoon} from "react-icons/fa";
import './theme-button.css';

const ToggleBtn = () => {
    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <button
        type="button"
        onClick={toggleTheme}
        className={theme ? "button-light-mode" : "button-dark-mode" }>
            {theme ? <FaMoon id='moon'/> : <FaSun id='sun'/>}
        </button>

    )
}

export default ToggleBtn;