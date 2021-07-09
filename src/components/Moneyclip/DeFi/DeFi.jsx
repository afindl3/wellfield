import './DeFi.css';
import moneyclip from '../../../images/icons/moneyclip.svg';
import whatItDoes from '../../../images/images/what-it-does.png';
import workAnimation from '../../../lotties/moneyclip/circles/work.json';
import wayYouLiveAnimation from '../../../lotties/moneyclip/underlines/way-you-live.json';

import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeFi({ scrollPosition }) {
  const [playAnimations, setPlayAnimations] = useState(false);
  const [underlineAnimation, setUnderlineAnimation] = useState(null);
  const [circleAnimation, setCircleAnimation] = useState(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const topPosition = animationRef.current.getBoundingClientRect().top;
    if (topPosition < scrollPosition) {
      setPlayAnimations(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (!document.getElementById('mc-defi__circle-animation').hasChildNodes()) {
      const circle = lottie.loadAnimation({
        container: document.querySelector("#mc-defi__circle-animation"),
        animationData: workAnimation,
        loop: false,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setCircleAnimation(circle);
    }
    if (!document.getElementById('mc-defi__underline-animation').hasChildNodes()) {
      const underline = lottie.loadAnimation({
        container: document.querySelector("#mc-defi__underline-animation"),
        animationData: wayYouLiveAnimation,
        loop: false,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setUnderlineAnimation(underline);
    }
    if (playAnimations && circleAnimation && underlineAnimation) {
      underlineAnimation.play();
      circleAnimation.play();
    }
  }, [playAnimations, circleAnimation, underlineAnimation]);

  return (
    <div className="mc-defi__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <img src={moneyclip} alt="Moneyclip logo" />
            <span className="mc-defi__eyebrow heading5">Why We Built It</span>
            <div style={{ position: 'relative' }}>
              <h2 className="mc-defi__heading heading2" ref={animationRef}>MoneyClip makes DeFi work for the way you live.</h2>
              <div id="mc-defi__circle-animation" />
              <div id="mc-defi__underline-animation" />
            </div>
          </Col>
          <Col xs={12} lg={6} className="d-lg-none">
            <img src={whatItDoes} alt="What it does" />
          </Col>
        </Row>
      </Container>

      <div className="mc-defi__image-wrapper d-none d-lg-block">
        <img className="mc-defi__image" src={whatItDoes} alt="What it does" />
      </div>
    </div>
  );
}

export default DeFi;
