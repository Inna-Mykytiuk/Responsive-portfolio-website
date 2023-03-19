import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/hero-bg.jpg';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
// import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Project',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Project',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Project',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Project',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Project',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Project',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Portfolio</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">My true passion</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About me</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          As I gazed upon the web page I had just finished
                          designing, a sense of pride and fulfillment washed
                          over me. There's something about web development that
                          just clicks with me - the endless possibilities, the
                          creative freedom, the challenge of problem-solving.
                          It's more than just a job or a hobby; it's a passion
                          that consumes me. Day and night, I spend hours
                          perfecting my craft. I immerse myself in coding
                          tutorials, experimenting with different technologies,
                          and brainstorming new ideas. I'm always striving to
                          learn more, to stay on top of the latest trends and
                          best practices, and to push myself to be the best web
                          developer I can be. It's not always easy - there are
                          times when I hit roadblocks and feel frustrated, or
                          when I have to put in long hours to meet a deadline.
                          But even then, I'm fueled by my love for web
                          development and the satisfaction of creating something
                          from scratch. To others, it may seem like just another
                          job, but to me, it's a way of life. It's a calling
                          that I'm grateful to have discovered, and I know I'll
                          be doing this for years to come. After all, when you
                          find something that you're truly passionate about,
                          it's not just a job - it's a part of who you are.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          As I gazed upon the web page I had just finished
                          designing, a sense of pride and fulfillment washed
                          over me. There's something about web development that
                          just clicks with me - the endless possibilities, the
                          creative freedom, the challenge of problem-solving.
                          It's more than just a job or a hobby; it's a passion
                          that consumes me. Day and night, I spend hours
                          perfecting my craft. I immerse myself in coding
                          tutorials, experimenting with different technologies,
                          and brainstorming new ideas. I'm always striving to
                          learn more, to stay on top of the latest trends and
                          best practices, and to push myself to be the best web
                          developer I can be. It's not always easy - there are
                          times when I hit roadblocks and feel frustrated, or
                          when I have to put in long hours to meet a deadline.
                          But even then, I'm fueled by my love for web
                          development and the satisfaction of creating something
                          from scratch. To others, it may seem like just another
                          job, but to me, it's a way of life. It's a calling
                          that I'm grateful to have discovered, and I know I'll
                          be doing this for years to come. After all, when you
                          find something that you're truly passionate about,
                          it's not just a job - it's a part of who you are.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
