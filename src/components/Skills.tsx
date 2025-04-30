import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <h5>ASP.Net</h5>
                </div>
                <div className="item">
                  <h5>Azure</h5>
                </div>
                <div className="item">
                  <h5>TypeScript / JavaScript</h5>
                </div>
                <div className="item">
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <h5>Unity Game Engine</h5>
                </div>
                <div className="item">
                  <h5>Unreal Game Engine</h5>
                </div>
                <div className="item">
                  <h5>Blender</h5>
                </div>
                <div className="item">
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <h5>React</h5>
                </div>
                <div className="item">
                  <h5>HTML / CSS</h5>
                </div>
                <div className="item">
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <h5>Vercel</h5>
                </div>
                <div className="item">
                  <h5>Unit Testing</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
    </section>
  );
};
