import './Header.css';
import scroll from '../../../images/icons/scroll-dark.svg';
import decentralizedAnimation from '../../../lotties/home/underlines/decentralized.json';

import lottie from 'lottie-web';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  useEffect(() => {
    setTimeout(() => {
      lottie.loadAnimation({
        container: document.querySelector("#sl-header__line-animation"),
        animationData: decentralizedAnimation,
        loop: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
    }, 1500)
  }, []);

  return (
    <div className="sl-header__bg-color">
      <div className="sl-header__bg">
        <div className="sl-header__horizontal" />
        <Container>
          <Row>
            <Col xs={12}>
              <div className="d-lg-flex justify-content-between">
                <div>
                  <h1 className="sl-header__heading1 heading1">Seamless</h1>
                  <div className="sl-header__button-wrapper">
                    <button className="sl-header__button button-lg d-none d-md-block">Launching 2022</button>
                    <button className="sl-header__button button-sm d-md-none">Launching 2022</button>
                  </div>
                  <img src={scroll} alt="Scroll to bottom" className="sl-header__scroll d-none d-lg-block" />
                </div>

                <div>
                  <div style={{ position: 'relative' }}>
                    <h1 className="sl-header__heading2 heading1">An ecosystem of protocols that removes the need for intermediaries.</h1>
                    <div id="sl-header__line-animation" />
                  </div>
                  <img src={scroll} alt="Scroll to bottom" className="sl-header__scroll d-lg-none" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Header;
