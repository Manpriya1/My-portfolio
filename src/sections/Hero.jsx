import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          {/* Left: 3D Avatar */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img
              src="/images/hero-avatar.png"
              alt="Manpriya Avatar"
              className="hero-avatar"
            />
          </Col>

          {/* Right: Text */}
          <Col md={7}>
            <h1>
              <span className="highlight">Hi, I'm Manpriya Dhanju</span>
              <br />
              Full Stack Developer
            </h1>
            <p>
              I build powerful, beautiful web apps using React, Node.js, and a
              whole lot of creativity.
            </p>
            <Link to="/contact">
        <button className="glow-button">Contact Me</button>
      </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
