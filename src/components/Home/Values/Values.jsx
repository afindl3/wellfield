import './Values.css';
import accessibility from '../../../images/icons/accessibility.svg';
import control from '../../../images/icons/control.svg';
import decentralization from '../../../images/icons/decentralization.svg';
import options from '../../../images/icons/options.svg';
import defiAnmiation from '../../../lotties/home/circles/defi.json';
import everyoneAnimation from '../../../lotties/home/underlines/everyone.json';

import lottie from 'lottie-web';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({ index, icon, title, body, slideIn }) => (
  <div className={slideIn ? `values__card-slide--${index}` : ''} style={{ height: '100%' }}>
    <div className={`values__card values__card--${index}`}>
      <img src={icon} alt={`${title} icon`} />
      <h5 className="values__card-title heading5">{title}</h5>
      <p className="p2 mb-0">{body}</p>
    </div>
  </div>
);

function Values() {
  const [slideIn, setSlideIn] = useState(false);
  const slideRef = useRef(null)

  useLayoutEffect(() => {
    const topPosition = slideRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      if (topPosition < scrollPosition) {
        setSlideIn(true);
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  useEffect(() => {
    if (slideIn) {
      setTimeout(() => {
        lottie.loadAnimation({
          container: document.querySelector("#values__defi-animation"),
          animationData: defiAnmiation,
          loop: false,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });

        lottie.loadAnimation({
          container: document.querySelector("#values__everyone-animation"),
          animationData: everyoneAnimation,
          loop: false,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });
      }, 1000)
    }
  }, [slideIn]);

  return (
    <div className="values__bg">
      <div className="values__horizontal values__horizontal1" />
      <div className="values__horizontal values__horizontal2" />
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="values__heading heading1">Our Values</h1>
            <div style={{ position: 'relative' }}>
              <h3 className="values__paragraph heading3">DeFi is reinventing finance. We want everyone to participate in ways that better their lives.</h3>
              <div id="values__defi-animation" />
              <div id="values__everyone-animation" />
            </div>
          </Col>
        </Row>
        <Row>
          <div ref={slideRef}></div>
          <Col xs={12} md={6} lg={3}>
            <Card
              icon={decentralization}
              title='Decentralization'
              body='DeFi is in its early stages. We are accelerating true decentralization.'
              index='1'
              slideIn={slideIn}
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              icon={control}
              title='Control'
              body='You should not need third parties to hold and protect your assets.'
              index='2'
              slideIn={slideIn}
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              icon={accessibility}
              title='Accessibility'
              body='Everyone should enjoy easy access to DeFi’s benefits.'
              index='3'
              slideIn={slideIn}
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              icon={options}
              title='Options'
              body='DeFi is only as powerful as its uses; it should work for the way you live.'
              index='4'
              slideIn={slideIn}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Values;
