import './Future.css';
import liquidity from '../../../images/icons/liquidity.svg';
import security from '../../../images/icons/security.svg';
import futureAnimation from '../../../lotties/moneyclip/circles/future.json';

import lottie from 'lottie-web';
import { useState, useEffect } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({ type, image, imageAlt, title, body, slideIn }) => (
  <div className={`mc-future__card mc-future__card--${type} ${slideIn ? `mc-future__card-slide--${type}` : ''}`}>
    <div>
      <img src={image} alt={imageAlt} />
    </div>
    <div>
      <h3 className="mc-future__card-title heading4">{title}</h3>
      <p className="mc-future__card-body p1">{body}</p>
    </div>
  </div>
);

function Future() {
  const [slideIn, setSlideIn] = useState(false);
  const [circleAnimation, setCircleAnimation] = useState(null);

  useEffect(() => {
    if (!document.getElementById('mc-future__circle-animation').hasChildNodes()) {
      const circle = lottie.loadAnimation({
        container: document.querySelector("#mc-future__circle-animation"),
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
    <div className="mc-future__bg-color">
      <div className="mc-future__bg">
        <div className="mc-future__horizontal mc-future__horizontal1" />
        <div className="mc-future__horizontal mc-future__horizontal2" />
        <Container>
          <Row>
            <Col xs={12}>
              <div style={{ position: 'relative' }}>
                <h2 className="mc-future__heading heading2">How does MoneyClip contribute to the future of finance?</h2>
                <div id="mc-future__circle-animation" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} lg={6}>
              <ScrollTrigger onEnter={() => setSlideIn(true)} style={{ height: '100%' }}>
                <Card
                  image={liquidity}
                  imageAlt='Liquidity icon'
                  title='The ultimate trading wallet.'
                  body='MoneyClip links your bank to blockchain and gives you regulated access to the world’s best DeFi solutions.'
                  type='left'
                  slideIn={slideIn}
                />
              </ScrollTrigger>
            </Col>
            <Col xs={12} lg={6}>
              <Card
                image={security}
                imageAlt='Security icon'
                title='All-in-one solution for DeFi products.'
                body='Savings, borrowing, merchant solutions: one app for every financial product on the ETH blockchain ecosystem.  '
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
