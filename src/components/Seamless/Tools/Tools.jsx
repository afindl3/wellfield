import './Tools.css';
import trade from '../../../images/icons/trade.svg';
import dbtc from '../../../images/icons/dbtc.svg';
import borrow from '../../../images/icons/borrow.svg';
import stake from '../../../images/icons/stake.svg';
import anyAnmiation from '../../../lotties/seamless/circles/any.json';

import lottie from 'lottie-web';
import { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({ index, icon, title, body, slideIn }) => (
  <div className={slideIn ? `tools__card-slide--${index}` : ''} style={{ height: '100%' }}>
    <div className={`tools__card tools__card--${index}`}>
      <img src={icon} alt={`${title} icon`} />
      <h5 className="tools__card-title heading5">{title}</h5>
      <p className="p2 mb-0">{body}</p>
    </div>
  </div>
);

function Tools() {
  const [slideIn, setSlideIn] = useState(false);
  const [circleAnimation, setCircleAnimation] = useState(null);

  useEffect(() => {
    if (!document.getElementById('tools__circle-animation').hasChildNodes()) {
      const circle = lottie.loadAnimation({
        container: document.querySelector("#tools__circle-animation"),
        animationData: anyAnmiation,
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
    <div className="tools__bg-color">
      <div className="tools__bg">
        <div className="tools__horizontal tools__horizontal1" />
        <div className="tools__horizontal tools__horizontal2" />
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className="tools__heading heading1">Suite of Tools</h1>
              <div style={{ position: 'relative' }}>
                <h3 className="tools__paragraph heading3">Protocols and apps that link together any blockchain.</h3>
                <div id="tools__circle-animation" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <ScrollTrigger onEnter={() => setSlideIn(true)} style={{ height: '100%' }}>
                <Card
                  icon={trade}
                  title='Trade'
                  body='Permissionless, unstoppable cross-blockchain trading.'
                  index='1'
                  slideIn={slideIn}
                />
              </ScrollTrigger>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                icon={dbtc}
                title='DBTC'
                body='A truly decentralized Bitcoin and Ethereum pairing.'
                index='2'
                slideIn={slideIn}
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                icon={borrow}
                title='Borrow'
                body='We empower borrowers to lend to themselves—no application, low interest, negligible fees.'
                index='3'
                slideIn={slideIn}
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                icon={stake}
                title='Derivatives'
                body='We enable truly decentralized futures and other financial products.'
                index='4'
                slideIn={slideIn}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Tools;
