import './Part.css';
import moneyclipLineAnimation from '../../../lotties/moneyclip/underlines/moneyclip-line.json';

import lottie from 'lottie-web';
import { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Part({ scrollPosition }) {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [underlineAnimation, setUnderlineAnimation] = useState(null);

  useEffect(() => {
    if (!document.getElementById('mc-part__underline-animation').hasChildNodes()) {
      const underline = lottie.loadAnimation({
        container: document.querySelector("#mc-part__underline-animation"),
        animationData: moneyclipLineAnimation,
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
    <div className="mc-part__bg-color">
      <div className="mc-part__bg">
        <div className="mc-part__horizontal mc-part__horizontal1" />
        <div className="mc-part__horizontal mc-part__horizontal2" />
        <Container>
          <Row>
            <Col xs={12}>
              <div className="mc-part__card">
                <div style={{ position: 'relative' }}>
                  <h2 className="mc-part__heading heading1">Moneyclip is part of Wellfield.</h2>
                  <div id="mc-part__underline-animation" />
                </div>

                <ScrollTrigger onEnter={() => setPlayAnimation(true)}>
                  <p className="mc-part__body p1">MoneyClip directly monetizes end users through various financial products and services offered in-app.</p>
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
