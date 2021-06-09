import './Company.css';
import rightBlack from '../../../images/icons/chevron-right-black.png';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = (props) => (
  <div className={`company__card company__card--${props.type}`}>
    <span className="company__card-number">{props.number}</span>

    <div className="company__button-wrapper">
      <button className={`button-lg company__button--${props.type}`}>{props.cta}</button>
    </div>
  </div>
);

function Company() {
  return (
    <>
      <div className="company__bg">
        <Container>
          <Row><Col xs={12} md={6}><span className="company__eyebrow heading5 orange">The Company</span></Col></Row>

          <Row>
            <Col xs={12} lg={6}>
              <h2 className="company__heading heading2">We have decades of banking, finance, and consumer-product experience.</h2>
              <Link to='/' className="link company__link">
                <span className="heading5">
                  Learn More <img src={rightBlack} style={{ marginLeft: 8 }} alt="Chevron right" />
                </span>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                number='5'
                cta='PhDs'
                type='left'
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                number='15'
                cta='Engineers'
                type='right'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Company;
