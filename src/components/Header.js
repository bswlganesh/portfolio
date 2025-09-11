import React from "react";
import "./Header.css";
//import logo from "../Assets/logo.jpg";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h1 className="name">bswlganesh</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#aboutme">AboutMe</a></li>
        </ul>
      </nav>
    </header>
  );
};

