//імпорт бібліотек та елементів
import { Container, Row, Col } from 'react-bootstrap';
//імпорт іконки
import { ArrowRightCircle } from 'react-bootstrap-icons';
//імпорт героя
// import headerImg from '../assets/img/header-img.svg';
import headerImg from '../assets/img/sakura.svg';
import { useState, useEffect } from 'react';

export const Banner = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const rotatingTexts = ['Web Developer', 'Freelancer'];
  const [currentText, setCurrentText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(300 - Math.random() * 100);
  const [currentIndex, setCurrentIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = rotationIndex % rotatingTexts.length;
      const fullText = rotatingTexts[i];

      let updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (isDeleting) {
        setTypingSpeed(prevTypingSpeed => prevTypingSpeed / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setCurrentIndex(prevIndex => prevIndex - 1);
        setTypingSpeed(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRotationIndex(prevRotationIndex => prevRotationIndex + 1);
        setCurrentIndex(1);
        setTypingSpeed(500);
      } else {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [currentText, isDeleting, rotationIndex, rotatingTexts, typingSpeed]);

  return (
    //розмітка секції
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagLine">Welcome to my Portfolio</span>
            <h1>
              {`Hi Hi Hi I'm TokIo `}
              <span className="wrap">{currentText}</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button onClick={() => console.log('connect')}>
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
