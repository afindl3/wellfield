import './DeFi.css';
import cryptoNet from '../../../lotties/seamless/crypto-net.json';

import lottie from 'lottie-web';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeFi() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#crypto-net"),
      animationData: cryptoNet,
      loop: false,
      // autoplay: false,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    });
  }, []);

  return (
    <div className="sl-defi__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <span className="sl-defi__eyebrow heading5">Why We Built It</span>
            <h2 className="sl-defi__heading heading2">DeFi is not yet truly decentralized. We do for trading what Bitcoin did to money.</h2>
          </Col>
          <Col xs={12} lg={6}>
            <div id="crypto-net" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeFi;
