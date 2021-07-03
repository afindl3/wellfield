import './Header.css';
import scroll from '../../../images/icons/scroll-to-bottom.svg';
import theFutureAnmiation from '../../../lotties/home/circles/the-future.json';
import decentralizedAnimation from '../../../lotties/home/underlines/decentralized.json';

import lottie from 'lottie-web';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#header__future-animation"),
      animationData: theFutureAnmiation,
      loop: false,
      // autoplay: false,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    });
    lottie.loadAnimation({
      container: document.querySelector("#header__decentralized-animation"),
      animationData: decentralizedAnimation,
      loop: false,
      // autoplay: false,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    });
  }, []);

  return (
    <div className="header__bg">
      <div className="header__horizontal" />
      <Container>
        <Row>
          <Col xs={12}>
            <div style={{ position: 'relative' }}>
              <h1 className="header__heading heading1">Wellfield is building technology that unlocks the future of decentralized finance.</h1>
              <div id="header__future-animation" />
              <div id="header__decentralized-animation" />
              <img src={scroll} alt="Scroll to bottom" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
