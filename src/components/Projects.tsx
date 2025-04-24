import { Col, Container, Nav, Row, Tab, TabContent } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae, possimus obcaecati et delectus itaque dolorem
              repudiandae quod nam placeat temporibus nulla quibusdam, officia
              earum beatae numquam est ea. Laudantium, praesentium?
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
              variant="pills"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
                <Tab.Pane eventKey="first">
                    <Row>
                    {
                        projects.map((project,index) => {
                            return (
                                <p>{project.title}</p>
                            )
                        })
                    }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey = "second">
                    Lorem ipsum
                </Tab.Pane>
                <Tab.Pane eventKey = "third">
                    Lorem ipsum
                </Tab.Pane>
            </TabContent>
            </Tab.Container>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
