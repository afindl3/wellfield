import './Part.css';
import seamlessLineAnimation from '../../../lotties/seamless/underlines/seamless-line.json';

import lottie from 'lottie-web';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ScrollTrigger from 'react-scroll-trigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Part() {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [underlineAnimation, setUnderlineAnimation] = useState(null);

  useEffect(() => {
    if (!document.getElementById('sl-part__underline-animation').hasChildNodes()) {
      const underline = lottie.loadAnimation({
        container: document.querySelector("#sl-part__underline-animation"),
        animationData: seamlessLineAnimation,
        loop: false,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setUnderlineAnimation(underline);
    }
    if (playAnimation && underlineAnimation) {
      setTimeout(() => { underlineAnimation.play() }, 1300);
    }
  }, [playAnimation, underlineAnimation]);

  return (
    <div className="sl-part__bg-color">
      <div className="sl-part__bg">
        <div className="sl-part__horizontal sl-part__horizontal1" />
        <div className="sl-part__horizontal sl-part__horizontal2" />
        <Container>
          <Row>
            <Col xs={12}>
              <div className="sl-part__card">
                <div style={{ position: 'relative' }}>
                  <h2 className="sl-part__heading heading1">Seamless is part of Wellfield.</h2>
                  <div id="sl-part__underline-animation" />
                </div>

                <ScrollTrigger onEnter={() => setPlayAnimation(true)}>
                  <p className="sl-part__body p1">Wellfield receives transaction fees from trades processed by the Seamless protocol, no matter the app or wallet being used.</p>
                </ScrollTrigger>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Part;
