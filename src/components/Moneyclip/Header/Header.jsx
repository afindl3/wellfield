import './Header.css';
import scroll from '../../../images/icons/scroll-light.svg';
import simplifiedAnimation from '../../../lotties/moneyclip/underlines/simplified.json';

import lottie from 'lottie-web';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  useEffect(() => {
    setTimeout(() => {
      lottie.loadAnimation({
        container: document.querySelector("#mc-header__simplified-animation"),
        animationData: simplifiedAnimation,
        loop: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
    }, 1500)
  }, []);

  return (
    <div className="mc-header__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <h1 className="mc-header__heading1 heading1">MoneyClip</h1>
            <div className="mc-header__button-wrapper">
              <button className="mc-header__button button-lg d-none d-md-block">Launching Fall 2021</button>
              <button className="mc-header__button button-sm d-md-none">Launching Fall 2021</button>
            </div>
            <img src={scroll} alt="Scroll to bottom" className="mc-header__scroll d-none d-lg-block" />
          </Col>
          <Col xs={12} lg={6}>
            <div style={{ position: 'relative' }}>
              <h1 className="mc-header__heading2 heading1">Simplified access to the world of DeFi.</h1>
              <div id="mc-header__simplified-animation" />
            </div>

            <img src={scroll} alt="Scroll to bottom" className="mc-header__scroll d-lg-none" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
