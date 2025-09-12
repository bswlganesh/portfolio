import React from "react";
import "./Projects.css";
import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    title: "Project One",
    description:
      "This is a sample description for the first project. It highlights the key features and the problem it solves.",
    technologies: ["React", "Node.js", "CSS Grid"],
    websiteUrl: "#",
    sourceCodeUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "A brief overview of the second project, explaining its purpose and the technologies used to build it.",
    technologies: ["JavaScript", "HTML5", "Sass", "API"],
    websiteUrl: "#",
    sourceCodeUrl: "#",
  },
  // Add more project objects here
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Some Projects I've Built</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};