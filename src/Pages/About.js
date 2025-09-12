import React from "react";
import "./About.css";
import illustration from "../Assets/drop.png";

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image-content">
          <img
            src={illustration}
            alt="Abstract illustration with a person's upper body"
            className="about-illustration"
          />
        </div>
        <div className="about-text-content">
          <h2 className="about-heading">About Me</h2>
          <p>
            I’m a frontend web developer specializing in React. Skilled in
            building responsive, user-friendly interfaces with HTML, CSS, and
            JavaScript, I focus on creating seamless digital experiences.
          </p>
          <p>
            Passionate about clean code, performance optimization, and modern
            design practices, I’m always eager to contribute to innovative web
            projects and grow as part of a dynamic development team.
          </p>
        </div>
      </div>
    </section>
  );
};

