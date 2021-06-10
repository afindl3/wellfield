import './DeFi.css';
import defi from '../../../images/logos/defi.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeFi() {
  return (
    <div className="defi__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <span className="defi__eyebrow heading5">Why We Built It</span>
            <h2 className="defi__heading heading2">DeFi is not yet truly decentralized. We do for trading what Bitcoin did to money.</h2>
          </Col>
          <Col xs={12} lg={6}>
            <img src={defi} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeFi;