import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Brief <span className="yellow"> Inquiry </span> About Me
            </h1>
            <p className="home-about-body">
              Hello, my name is <span className="yellow">Juan Andrés Carmona León </span>
              and I'm a <span className="yellow">Software Engineer</span> based in Bogotá, Colombia.
              <br />
              <br />
              I am a <b className="yellow">Bachelor of Software Engineering</b> graduate and a <span className="yellow">Certified Salesforce Email Specialist</span> with over 2.5 years of professional experience.
              <br />
              <br />
              Currently, I work as an <b className="yellow">Experience Technology Engineer</b> at Publicis Global Delivery. I have worked primarily in <b className="yellow">Email Engineering</b>, developing high-fidelity and dark-mode architectures for global clients like <b className="yellow">Pfizer.</b>
              <br />
              <br />
              I’ve worked architecting complex email campaigns based on <b className="yellow">UX designs (Figma and Adobe Suite)</b> using <b className="yellow">HTML/CSS (VML)</b>, ensuring pixel-perfect rendering across all major clients. I am also proficient in <b className="yellow">AMPscript, Salesforce Marketing Cloud Content Builder, and Dynamic Content creation.</b>
              <br />
              <br />
              I am also proficient in <b className="yellow">Javascript and Node.js</b>, using <b className="yellow">React.js</b> to build tools that automate development workflows, and I am currently expanding my knowledge in <b className="yellow">Next.js</b> to grow as a full-stack developer.
              <br />
              <br />
              Beyond coding, I have a deep interest in <b className="yellow">high-altitude geography</b>, spending time with my cat <b className="yellow">Tetris</b>, and everything related to <b className="yellow">Porsche 911</b> engineering and history.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;