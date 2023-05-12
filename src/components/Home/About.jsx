import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                   A Brief <span className="yellow"> Inquiery </span> About Me
                </h1>
                <p className="home-about-body">
                 Hello, my name is <span className="yellow">Juan Andrés Carmona León </span>
                 and I'm from <span className="yellow"> Bogotá, Colombia.</span>
                <br />
                <br />
                Im a Software Engineering student, and im a graduate from a fullstack development Bootcamp called <span className="yellow"> SoyHenry</span> 
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset, and im always in the search of new knowledge.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Javascript, </b>
                    as well as have some experience in programming languages such as C++, Java, PHP,
                  
                  <br />
                  <br />
                  I had work 
                  with <b className="yellow">Node.js, SQLDatabases, SequelizeORM, </b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b> and im learning <b className="yellow"> Next.JS</b> 
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence and videogames.</b> but i dont have a lot of experience with the last two
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About