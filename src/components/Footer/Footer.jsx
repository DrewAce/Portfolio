import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/sLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>In the search of new knowledge!</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year}</h3>
            
          </Col>
          <Col>
          <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/DrewAce"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/juan-andr%C3%A9s-carmona-le%C3%B3n-52a378261/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
               
                </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer