import React from "react";
import "../styles/projects.css";

const projectsData = [
  {
    title: "Movie App",
    image: "certifications/movies.png",
    description:
      "Full-stack Movie Booking web-app using the MERN (MongoDB, Express, React, Node.js) stack.",
    tech: ["MongoDB", "Express", " React", "Node.js"],
    demoLink: "https://github.com/Manpriya1/MOVIE-APP",
    githubLink: "https://github.com/Manpriya1/MOVIE-APP",
  },
  {
    title: "Travelling Website",
    image: "certifications/bg1.jpg",
    description:
      "A worthwhile and responsive web application designed using HTML and CSS. PHP and MySQL are used as backend language and database respectively.",
    tech: ["Php", "MySQL", "HTML", "CSS"],
    demoLink: "https://github.com/Manpriya1/Traveling",
    githubLink: "https://github.com/Manpriya1/Traveling",
  },
  {
    title: "Life Tracking App",
    image: "certifications/Tracking1.png",
    description:
      "Life Tracking Web Application Monitors Health and Wealth. The main aim of the app is to make lifestyle healthier by tracking Calorie intake, Water intake, Sleep Analysis, and Workout patterns..",
    tech: ["Angular.js", "Node.js", "JavaScript"],
    demoLink: "https://github.com/Manpriya1/LifeTracking",
    githubLink: "https://github.com/Manpriya1/LifeTracking",
  },
  {
    title: "Notes App",
    image: "certifications/notes1.png",
    description:
      "A user-friendly website named Notes Making app designed where you can add important notes. Features like add and delete are proposed.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://github.com/Manpriya1/Note-App",
    githubLink: "https://github.com/Manpriya1/Note-App",
  },
  // {
  //   title: "Chat App",
  //   image: "/assets/chatapp.png",
  //   description: "A real-time chat app using Socket.IO.",
  //   tech: ["React", "Node.js", "Socket.IO"],
  //   demoLink: "https://chatapp-demo.com",
  //   githubLink: "https://github.com/your-username/chat-app",
  // },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
