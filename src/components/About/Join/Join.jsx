import './Join.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = (props) => (
  <div className={`join__card join__card--${props.type}`}>
    <span className="join__card-number">{props.number}</span>

    <div className="join__button-wrapper">
      <button className={`button-lg join__button--${props.type}`}>{props.cta}</button>
    </div>
  </div>
);

function Join() {
  return (
    <div className="join__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6} lg={{ order: 2 }}>
            <div className="join__copy-container">
              <h2 className="join__heading heading2">Join Us</h2>
              <p className="p1 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et. Sit nulla cursus fringilla erat at facilisis.</p>
              <button className="join__button button-lg d-none d-md-block">Button</button>
              <button className="join__button button-sm d-md-none">Button</button>
            </div>
          </Col>
          <Col xs={12} lg={6} lg={{ order: 1 }}>
            <Row>
              <Col xs={12} md={6} lg={12}>
                <Card
                  number='5'
                  cta='PhDs'
                  type='top'
                />
              </Col>
              <Col xs={12} md={6} lg={12}>
                <Card
                  number='15'
                  cta='Engineers'
                  type='bottom'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Join;
