import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import RickAndMorty from "../assets/projects/RickAndMorty.png"
import shoppingcart from "../assets/projects/shoppingcart.PNG"
import gpt3 from "../assets/projects/gpt3.PNG"
import Countries from "../assets/projects/Countries.PNG"
import ChicCloset from "../assets/projects/Chiccloset.PNG"
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RickAndMorty}
              isBlog={false}
              title="Rick and Morty Characters App"
              description="This is a single page app where you can get characters from the Rick and Morty Show select your favorites get their detail and a lot of other cool stuff."
              ghLink="https://github.com/DrewAce/RickAndMortyApplication"
              demoLink="https://rick-and-morty-application-seven.vercel.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt3}
              isBlog={false}
              title="GPT-3 AI Design"
              description="This is a responsive ReactJS application based on a figma public design about GPT-3 AI trying to replicate in the most accurate way that design ."
              ghLink="https://github.com/DrewAce/DrewAce-GPT-3-AI-Design"
              demoLink="https://drew-ace-gpt-3-ai-design.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingcart}
              isBlog={false}
              title="Shopping Cart"
              description="This was my first React project, a basic shopping cart, where you can add 3 products into the shopping cart In this project im using class components instead of functional components."
              ghLink="https://github.com/DrewAce/ShoppingCart"
              demoLink="https://shopping-cart-delta-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Countries}
              isBlog={false}
              title="Henry Countries"
              description="This is a Web Application using the RestCountries API, where you can make a CRUD with all the information the API gives you, and you can create activities related with the countries, This application was made using React.JS Node.JS Redux.JS SequelizeORM SQL Databases, CSS, and Javascript"
              ghLink="https://github.com/DrewAce/Countries-PI-"
              demoLink="https://countries-pi-pink.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChicCloset}
              isBlog={false}
              title="Chic Closet"
              description="This is a web application for an online clothes store called ChicCloset, this application uses the next technologies: MongoDB, React, Redux, Express, was deployed on firebase"
              ghLink="https://github.com/rdtaipe/Henry-PF-MERN-stack"
              demoLink="https://chiccloset-service.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects