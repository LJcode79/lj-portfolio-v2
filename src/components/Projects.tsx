import { Col, Container, Nav, Row, Tab, TabContent } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import finsharkImg from "../assets/img/finshark.png";
import runGroupImg from "../assets/img/runGroupImg.png";
import ecommerceImg from "../assets/img/ecommerceImg.png";
import workoutBuddy from "../assets/img/workoutBuddy.png";
import connectSphere from "../assets/img/connectSphere.png"
import jawsImg from "../assets/img/jaws.png"
import milSimImg from "../Pages/ProjectBlogs/images/milSim/img1.png"
import gBooImg from "../Pages/ProjectBlogs/images/guessBoo/boo1.png"
import tRangeImage from "../Pages/ProjectBlogs/images/TurtleRange/turtle1.png"
import ARealmImage from "../Pages/ProjectBlogs/images/Adventure/adventure1.png"
import SpaceBaseImage from "../Pages/ProjectBlogs/images/Space base Attack/Space1.png"
import PresidentImage from "../Pages/ProjectBlogs/images/president/president1.png"
import BlackjackImage from "../Pages/ProjectBlogs/images/blackjack/blackjackImage4.png"
import CubetubeImage from "../Pages/ProjectBlogs/images/CubeTubeScreenshot.png"
import DoorDetectorImg from "../Pages/ProjectBlogs/images/DoorDetector/iotPic.png"



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
      description: "Open world survival game, using tactical shooter and survival mechanics. Inspired by some of my favorite games.",
      imgUrl: milSimImg,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: './milsim',
    },
    {
      title: "Guess Boo",
      description: "You are a paranormal journalist attempting to find out who exactly is haunting the house. Use context clues such as sound and search for unique evidence to identify the ghost. Guess correctly and avoid being hunted to safely escape the house. Beware of guessing the wrong ghost!",
      imgUrl: gBooImg,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/GuessBoo',
      gitLink2: undefined,
      blogLink: './guessBoo',
    },
    {
      title: "Turtle Range",
      description: "Take out as many turtles as you can with a bow, but don't let them cross the line!",
      imgUrl: tRangeImage,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/TurtleRange',
      gitLink2: undefined,
      blogLink: './turtle',
    },
    {
      title: "Adventure Realm",
      description: "Quest line based RPG. Start off as a peasant working the farms to becoming the hero of the village!",
      imgUrl: ARealmImage,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/AdventureRealm',
      gitLink2: undefined,
      blogLink: './adventure',
    },
    {
      title: "Space Base Attack",
      description: "The alien army of foxes have stolen your money, get your coins back and eliminate the thieving foxes!",
      imgUrl: SpaceBaseImage,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/SpaceBaseAttack',
      gitLink2: undefined,
      blogLink: './spaceBase',
    },
    {
      title: "Presidential Election Simulator",
      description: "Text-based board game, choose your actions wisely in this multiplayer journey to become the next President of the United States!",
      imgUrl: PresidentImage,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/PresidentGame',
      gitLink2: undefined,
      blogLink: './president',
    },
    {
      title: "Blackjack",
      description: "Single player, text-based game of Blackjack. Input the amount of money you want to bet and play against an AI dealer!",
      imgUrl: BlackjackImage,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/BlackjackFinal2020',
      gitLink2: undefined,
      blogLink: './blackjack',
    },
    {
      title: "Cubetube",
      description: "Cube runner game, avoid blocks to get a higher score! My first game using the Unity Game Engine",
      imgUrl: CubetubeImage,
      webLink: undefined,
      gitLink: undefined,
      gitLink2: undefined,
      blogLink: './cubetube',
    },
  ];

  const otherprojects = [
    {
      title: "Door Detector",
      description: "An IoT device capable of detecting whether a door is opened or closed. Using a buzzer, the device uses a series of beeps to notify the user when the status of the door changes.",
      imgUrl: DoorDetectorImg,
      webLink: undefined,
      gitLink: 'https://github.com/LJcode79/IoT-Door-Alarm',
      gitLink2: undefined,
      blogLink: './doorDetector',
    }
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
