import React from "react";
import Tilt from "react-parallax-tilt";
import "./ProjectCard.css";
import externalLinkIcon from "../Assets/external-link.svg";
import codeIcon from "../Assets/code.svg";

export const ProjectCard = ({
  title,
  description,
  technologies,
  websiteUrl,
  imageUrl,
  sourceCodeUrl,
}) => {
  return (
    <div className="project-card-container">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        transitionSpeed={250}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="project-card"
      >
        <div className="card-header">
          <img src={imageUrl} alt={title} className="project-image" />
          <div className="project-title-container">
            <h3 className="project-title">{title}</h3>
          </div>
        </div>
        <div className="card-body">
          <p className="project-description">{description}</p>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            Visit Website
            <img src={externalLinkIcon} alt="External link" />
          </a>
          <a
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            Source Code
            <img src={codeIcon} alt="Code repository" />
          </a>
        </div>
      </Tilt>
    </div>
  );
};
