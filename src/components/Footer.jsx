import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Manpriya Dhanju. All Rights Reserved.</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/manpriya-dhanju-604205222/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Manpriya1" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
