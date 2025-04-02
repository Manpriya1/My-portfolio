import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="glow-title">About Me</h2>
          <p>
            I’m a passionate <span className="highlight">Full Stack Developer</span> with a love for building creative,
            responsive web applications. I enjoy blending clean UI with powerful backend logic.
            I specialize in the MERN stack and love exploring animation and 3D design in modern web apps.
            Always learning. Always building.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="glow-title">#skills</h2>
          <div className="skill-category"><h3>Languages</h3><p>Php,TypeScript, JavaScript</p></div>
          <div className="skill-category"><h3>Databases </h3><p>MongoDB, MySQL</p></div>
          <div className="skill-category"><h3>Frameworks</h3><p>Angular, ReactJS,Liquid.js</p></div>
          <div className="skill-category"><h3>Tools</h3><p>Postman, Git,Vite,Webpack,Npm,Figma, VSCode,Yarn</p></div>
          <div className="skill-category"><h3>Other</h3><p>HTML, CSS, REST,Redux,JQuery,Material-UI,Bootstrap,HandleBars</p></div>
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <h2 className="glow-title">#experience</h2>
          <div className="experience-entry">
            <h3>Full Stack Developer -Masters'Union Company</h3>
            <p>Jul 2021 – Mar2024</p>
            <ul>
              <li>Built responsive web apps using MERN stack.</li>
              <li>Collaborated in Agile teams and Worked on frontend and backend development.</li>
              <li>Worked on RESTful APIs and MongoDB integration.</li>
            </ul>
          </div>
          <div className="experience-entry">
            <h3>Intern as a Front-end Developer -Masters'Union Company(LPU)</h3>
            <p>March 2022</p>
            <ul>
              <li>Worked as a React.js Front-end Developer.</li>
              <li>Worked on HandleBars.</li>
              <li>Worked on RESTful APIs,Redux and MongoDB integration.</li>
            </ul>
          </div>
        </div>

        {/* Achievements Section */}
        <h3 className="glow-subtitle">Achievements</h3>
<div className="certifications">
  <img src="/src/assets/certifications/cert10.jpeg" alt="Certification 1" />
  <img src="/src/assets/certifications/cert20.png" alt="Certification 2" />
  <img src="/src/assets/certifications/cert30.jpeg" alt="Certification 3" />
</div>

      </div>
    </section>
  );
};

export default About;
