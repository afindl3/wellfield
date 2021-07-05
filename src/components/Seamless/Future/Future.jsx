import './Future.css';
import liquidity from '../../../images/icons/liquidity.svg';
import security from '../../../images/icons/security.svg';
import theFutureAnmiation from '../../../lotties/home/circles/the-future.json';

import lottie from 'lottie-web';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Future() {
  const [slideIn, setSlideIn] = useState(false);
  const slideRef = useRef(null);

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
    lottie.loadAnimation({
      container: document.querySelector("#sl-future__future-animation"),
      animationData: theFutureAnmiation,
      loop: false,
      // autoplay: false,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    });
  }, []);

  const Card = (props) => (
    <div className={slideIn ? `sl-future__card-slide--${props.type}` : ''}>
      <div className={`sl-future__card sl-future__card--${props.type}`}>
        <img src={props.image} alt={props.imageAlt} />
        <h3 className="sl-future__card-title heading4">{props.title}</h3>
        <p className="sl-future__card-body p1">{props.body}</p>
      </div>
    </div>
  );

  return (
    <div className="sl-future__bg">
      <div className="sl-future__horizontal sl-future__horizontal1" />
      <div className="sl-future__horizontal sl-future__horizontal2" />
      <Container>
        <Row>
          <Col xs={12}>
            <div style={{ position: 'relative' }}>
              <h2 className="sl-future__heading heading2">How does Seamless contribute to the future of finance?</h2>
              <div id="sl-future__future-animation" />
            </div>
          </Col>
        </Row>

        <Row>
          <div ref={slideRef}></div>
          <Col xs={12} lg={6}>
            <Card
              image={liquidity}
              imageAlt='Liquidity icon'
              title='Blockchain-agnostic, open, and permissionless.'
              body='By working with any blockchain, Seamless securely provides liquidity to the entire DeFi ecosystem.'
              type='left'
            />
          </Col>
          <Col xs={12} lg={6}>
            <Card
              image={security}
              imageAlt='Security icon'
              title='Security and execution performance at scale.'
              body='With breakthrough cryptography and multi-party computation, Seamless allows you to control your assets at all times.'
              type='right'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Future;
