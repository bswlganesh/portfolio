import React from "react";
import "./Projects.css";
import { ProjectCard } from "../components/ProjectCard";

const projectData = [
  {
    title: "Filminfosis",
    description:
      "A sleek app to explore detailed movie info at a glance",
    technologies: ["React.js", "JavaScript", "HTML5", "Sass", "CSS","API"],
    websiteUrl: "https://filminfosis.netlify.app/",
    sourceCodeUrl: "https://github.com/bswlganesh/filminfosis",
  },
  {
    title: "Todolist",
    description:
      "A clean, intuitive task manager to track your things-to-do effortlessly.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS","Storage"],
    websiteUrl: "https://bswl-todolist.netlify.app/",
    sourceCodeUrl: "https://github.com/bswlganesh/todolist",
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

