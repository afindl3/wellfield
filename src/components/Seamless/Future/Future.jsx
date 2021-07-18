import './Future.css';
import liquidity from '../../../images/icons/liquidity.svg';
import security from '../../../images/icons/security.svg';
import futureAnimation from '../../../lotties/seamless/circles/future.json';

import lottie from 'lottie-web';
import { useState, useEffect } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({ type, image, imageAlt, title, body, slideIn }) => (
  <div className={slideIn ? `sl-future__card-slide--${type}` : ''}>
    <div className={`sl-future__card sl-future__card--${type}`}>
      <img src={image} alt={imageAlt} />
      <h3 className="sl-future__card-title heading4">{title}</h3>
      <p className="sl-future__card-body p1">{body}</p>
    </div>
  </div>
);

function Future() {
  const [slideIn, setSlideIn] = useState(false);
  const [circleAnimation, setCircleAnimation] = useState(null);

  useEffect(() => {
    if (!document.getElementById('sl-future__circle-animation').hasChildNodes()) {
      const circle = lottie.loadAnimation({
        container: document.querySelector("#sl-future__circle-animation"),
        animationData: futureAnimation,
        loop: false,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setCircleAnimation(circle);
    }
    if (slideIn && circleAnimation) {
      setTimeout(() => { circleAnimation.play() }, 1000);
    }
  }, [slideIn, circleAnimation]);

  return (
    <div className="sl-future__bg-color">
      <div className="sl-future__bg">
        <div className="sl-future__horizontal sl-future__horizontal1" />
        <div className="sl-future__horizontal sl-future__horizontal2" />
        <Container>
          <Row>
            <Col xs={12}>
              <div style={{ position: 'relative' }}>
                <h2 className="sl-future__heading heading2">How does Seamless contribute to the future of finance?</h2>
                <div id="sl-future__circle-animation" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} lg={6}>
              <ScrollTrigger onEnter={() => setSlideIn(true)}>
                <Card
                  image={liquidity}
                  imageAlt='Liquidity icon'
                  title='Blockchain-agnostic, open, and permissionless.'
                  body='By working with any blockchain, Seamless securely provides liquidity to the entire DeFi ecosystem.'
                  type='left'
                  slideIn={slideIn}
                />
              </ScrollTrigger>
            </Col>
            <Col xs={12} lg={6}>
              <Card
                image={security}
                imageAlt='Security icon'
                title='Security and execution performance at scale.'
                body='With breakthrough cryptography and multi-party computation, Seamless allows you to control your assets at all times.'
                type='right'
                slideIn={slideIn}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Future;
