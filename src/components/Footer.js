import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailChimpForm';
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <p className="footer-logo">TokIo</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p className="footer-text">
              Copyright 2023. All Rights Reserved. The idea is borrowed from
              webdecoded. Made with love by TokIo.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
