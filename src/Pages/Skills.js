import React from "react";
import "./Skills.css";

import javascriptIcon from "../Assets/Skills/javascript.svg";
import reactIcon from "../Assets/Skills/react.svg";
import pythonIcon from "../Assets/Skills/python.svg";
import cppIcon from "../Assets/Skills/cpp.svg";
import githubIcon from "../Assets/Skills/github.svg";
import gitIcon from "../Assets/Skills/git.svg";
import postmanIcon from "../Assets/Skills/postman.svg";
import vscIcon from "../Assets/Skills/vsc.svg";
import cssIcon from "../Assets/Skills/css.svg";

const skills = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "React", icon: reactIcon, specialClass: "react-icon-spin" },
  { name: "Python", icon: pythonIcon },
  { name: "C++", icon: cppIcon },
  { name: "CSS", icon: cssIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Git", icon: gitIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "VS Code", icon: vscIcon },
];

export const Skills = () => {
  // Split skills into two rows
  const row1 = skills.slice(0, 5);
  const row2 = skills.slice(5);
  const rows = [row1, row2];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">My Skills.</h2>
        <p className="skills-subheading"></p>
        <div className="skills-grid">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`skill-row ${rowIndex % 2 === 1 ? "offset" : ""}`}
            >
              {row.map((skill, index) => (
                <div
                  className="skill-item"
                  key={index}
                >
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className={`skill-icon ${skill.specialClass || ""}`}
                    />
                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
