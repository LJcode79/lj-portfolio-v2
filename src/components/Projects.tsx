import { Col, Container, Nav, Row, Tab, TabContent } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import finsharkImg from "../assets/img/finshark.png";
import runGroupImg from "../assets/img/runGroupImg.png";
import ecommerceImg from "../assets/img/ecommerceImg.png";
import workoutBuddy from "../assets/img/workoutBuddy.png";
import connectSphere from "../assets/img/connectSphere.png"
import jawsImg from "../assets/img/jaws.png"

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const webprojects = [
    {
      title: "Stock App",
      description:
        "Stock social media app with a real time stock data API. Add stocks to your portfolio. Made with a React frontend, ASP.Net backend, and Microsoft SQL Database. Deployed using Azure App Services and Azure SQL Databases.",
      imgUrl: finsharkImg,
      webLink:
        "https://ljstockfrontend-h2aqeccqdxcva3am.westus2-01.azurewebsites.net/",
      gitLink: "https://github.com/LJcode79/lj-portfolio-v2",
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Running App",
      description:
        "Social media app for running groups. Create clubs and races and meet up with other runners. Made with ASP.Net Core Web MVC and Microsoft SQL Database. Deployed using Azure App Services and Azure SQL Databases.",
      imgUrl: runGroupImg,
      webLink:
        "https://rungroup-eyd7crb5adfzfxh3.westus2-01.azurewebsites.net/Club",
      gitLink: "https://github.com/LJcode79/RunGroupWebApp",
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Ecommerce Website",
      description:
        "Simple ecommerce website that utilizes Stripe API for payments. Made with NextJS, Tailwind CSS, and Sanity Database. Tested with Postman. Deployed using Vercel",
      imgUrl: ecommerceImg,
      webLink: "https://lj-commerce.vercel.app/",
      gitLink: "https://github.com/LJcode79/lj-commerce",
      blogLink: undefined,
    },
    {
      title: "Workout Buddy",
      description:
        "MERN stack application created to keep track of workouts. Uses MongoDB to keep track of workout data, as well as the time when the workout was created. This website utilizes JWT authentication and password decryption for security. The frontend is deployed on Netlify, the backend on Railway.",
      imgUrl: workoutBuddy,
      webLink: "https://ljbuddy.netlify.app/",
      gitLink: 'https://github.com/LJcode79/mernstackV1-client',
      gitLink2: 'https://github.com/LJcode79/mernstackV1-server',
      blogLink: undefined,
    },
    {
      title: "Connect Sphere",
      description: "Developed the front end of this mock social media website. Implemented multiple features such as the sign in, sign up page, home page, and message page.",
      imgUrl: connectSphere,
      webLink: 'https://connectsphere.netlify.app/',
      gitLink: 'https://github.com/LJcode79/MockSocialMedia',
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Joint Action Workout System (JAWS)",
      description: "Take user characteristics, such as weight, height, equipment available, and produce a week of workouts for the user!",
      imgUrl: jawsImg,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/JAWS',
      gitLink2: undefined,
      blogLink: undefined,
    },
  ];

  const gameprojects = [
    {
      title: "Military Sim Survival",
      description: "Design & Development",
      imgUrl: projImg1,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: './milsim',
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
  ];

  const otherprojects = [
    {
      title: "Other Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: undefined,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Dev</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Game Dev</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Other</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <Tab.Pane eventKey="first">
                  <Row>
                    {webprojects.map((project, index) => {
                      return (
                        <ProjectCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          webLink={project.webLink}
                          gitLink={project.gitLink}
                          gitLink2={project.gitLink2}
                          blogLink={project.blogLink}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {gameprojects.map((project, index) => {
                      return (
                        <ProjectCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          webLink={project.webLink}
                          gitLink={project.gitLink}
                          gitLink2={project.gitLink2}
                          blogLink={project.blogLink}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {otherprojects.map((project, index) => {
                      return (
                        <ProjectCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          webLink={project.webLink}
                          gitLink={project.gitLink}
                          gitLink2={project.gitLink2}
                          blogLink={project.blogLink}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
