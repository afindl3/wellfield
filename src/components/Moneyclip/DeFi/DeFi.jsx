import './DeFi.css';
import moneyclip from '../../../images/icons/moneyclip.svg';
import whatItDoes from '../../../images/images/what-it-does.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeFi() {
  return (
    <div className="mc-defi__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <img src={moneyclip} />
            <span className="mc-defi__eyebrow heading5">Why We Built It</span>
            <h2 className="mc-defi__heading heading2">MoneyClip makes DeFi work for the way you live.  </h2>
          </Col>
          <Col xs={12} lg={6} className="d-lg-none">
            <img src={whatItDoes} />
          </Col>
        </Row>
      </Container>

      <div className="mc-defi__image-wrapper d-none d-lg-block">
        <img className="mc-defi__image" src={whatItDoes} alt="Gear" />
      </div>
    </div>
  );
}

export default DeFi;
