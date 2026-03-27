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
              I am a <b className="yellow">Bachelor of Software Engineering</b> graduate and a <span className="yellow">Certified Salesforce Marketing Cloud Email Specialist</span> with over 2.5 years of experience in the tech industry.
              <br />
              <br />
              I currently work as an <b className="yellow">Experience Technology Engineer</b> at Publicis Global Delivery, where I develop and maintain digital solutions for global clients like <b className="yellow">Pfizer.</b>
              <br />
              <br />
              As a developer, I enjoy the challenge of building clean and efficient code. I'm proficient in <b className="yellow">Javascript,</b> and I have experience working with <b className="yellow">Node.js, React.js,</b> and <b className="yellow">Astro</b> to automate internal workflows.
              <br />
              <br />
              I am also interested in exploring <b className="yellow">Web Technologies</b> and <b className="yellow">Artificial Intelligence</b>, always looking for new ways to expand my skillset and grow professionally.
              <br />
              <br />
              Beyond coding, I have a deep interest in <b className="yellow">high-altitude geography</b>, spending time with my orange cat <b className="yellow">Tetris</b>, and everything related to <b className="yellow">Porsche 911</b> engineering and history.
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