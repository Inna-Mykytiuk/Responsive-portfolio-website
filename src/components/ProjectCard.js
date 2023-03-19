import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={4} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};
