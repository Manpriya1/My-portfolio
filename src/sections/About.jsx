import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* <div className="about-image">
          <img src="/your-avatar.png" alt="Manpriya" />
        </div> */}
        <div className="about-content">
          <h2 className="glow-title">About Me</h2>
          <p>
            I’m a passionate <span className="highlight">Full Stack Developer</span> with a love for building
            creative, responsive web applications. I enjoy blending clean UI with powerful backend logic.
          </p>
          <p>
            I specialize in the <span className="highlight">MERN</span> stack and love exploring animation and 3D
            design in modern web apps. Always learning. Always building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
