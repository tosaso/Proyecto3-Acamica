import React, { useState } from "react";
import "./header.css";

function Header({ click, isDarkMode }) {
  return (
    <header className="header">
      <img
        className="logo"
        src={isDarkMode ? "./images/logo.svg" : "./images/logo-dark.svg"}
        alt="logo"
      />
      <button
        onClick={() => click(!isDarkMode)}
        className={isDarkMode ? "btn-dark" : "btn-light"}
      >
        {isDarkMode ? "Modo Dark" : "Modo Light"}
      </button>
    </header>
  );
}

export default Header;
