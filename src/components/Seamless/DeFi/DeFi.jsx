import './DeFi.css';
import cryptoNet from '../../../lotties/seamless/crypto-net.json';
import decentralizedAnimation from '../../../lotties/home/underlines/decentralized.json';

import lottie from 'lottie-web';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeFi() {
  const [playAnimation, setPlayAnimation] = useState(false); // same as slideIn
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const topPosition = animationRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      if (topPosition < scrollPosition) {
        setPlayAnimation(true);
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  useEffect(() => {
    if (playAnimation) {
      lottie.loadAnimation({
        container: document.querySelector("#sl-defi__crypto-animation"),
        animationData: cryptoNet,
        loop: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setTimeout(() => {
        lottie.loadAnimation({
          container: document.querySelector("#sl-defi__line-animation"),
          animationData: decentralizedAnimation,
          loop: false,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });
      }, 1000)
    }
  }, [playAnimation]);

  return (
    <div className="sl-defi__bg">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-lg-flex justify-content-between">
              <div>
                <span className="sl-defi__eyebrow heading5">Why We Built It</span>
                <div style={{ postion: 'relative' }}>
                  <h2 className="sl-defi__heading heading2">DeFi is not yet truly decentralized. We do for trading what Bitcoin did to money.</h2>
                  <div id="sl-defi__line-animation"></div>
                </div>
              </div>

              <div>
                <div ref={animationRef}></div>
                <div id="sl-defi__crypto-animation" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeFi;
