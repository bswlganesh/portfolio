import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="name">bswlganesh</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="cta-section">
          <a href="/resume.pdf" download className="resume-button">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};
