import './DeFi.css';
import cryptoComp from '../../../lotties/seamless/full-images/crypto-comp.json';
import trulyAnimation from '../../../lotties/seamless/underlines/truly.json';

import lottie from 'lottie-web';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeFi({ scrollPosition }) {
  const [playAnimations, setPlayAnimations] = useState(false); // same as slideIn
  const [underlineAnimation, setUnderlineAnimation] = useState(null);
  const [imageAnimation, setImageAnimation] = useState(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const topPosition = animationRef.current.getBoundingClientRect().top;
    if ((topPosition < scrollPosition) && !playAnimations) {
      setPlayAnimations(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (!document.getElementById('sl-defi__image-animation').hasChildNodes()) {
      const image = lottie.loadAnimation({
        container: document.querySelector("#sl-defi__image-animation"),
        animationData: cryptoComp,
        loop: false,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setImageAnimation(image);
    }
    if (!document.getElementById('sl-defi__underline-animation').hasChildNodes()) {
      const underline = lottie.loadAnimation({
        container: document.querySelector("#sl-defi__underline-animation"),
        animationData: trulyAnimation,
        loop: false,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setUnderlineAnimation(underline);
    }
    if (playAnimations && underlineAnimation && imageAnimation) {
      imageAnimation.play();
      setTimeout(() => { underlineAnimation.play(); }, 1300);
    }
  }, [playAnimations]);

  return (
    <div className="sl-defi__bg">
      <div className="sl-defi__horizontal" />
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-lg-flex justify-content-between">
              <div>
                <span className="sl-defi__eyebrow heading5">Why We Built It</span>
                <div style={{ postion: 'relative' }}>
                  <h2 className="sl-defi__heading heading2">DeFi is not yet truly decentralized. We do for trading what Bitcoin did to money.</h2>
                  <div id="sl-defi__underline-animation"></div>
                </div>
              </div>

              <div>
                <div ref={animationRef}></div>
                <div id="sl-defi__image-animation" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeFi;
