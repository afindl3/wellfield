import './Future.css';
import liquidity from '../../../images/icons/liquidity.svg';
import security from '../../../images/icons/security.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = (props) => (
  <div className={`sl-future__card sl-future__card--${props.type}`}>
    <img src={props.image} />
    <h3 className="sl-future__card-title heading4">{props.title}</h3>
    <p className="sl-future__card-body p1">{props.body}</p>
  </div>
);

function Future() {
  return (
    <div className="sl-future__bg">
      <Container>
        <Row>
          <Col xs={12}><h2 className="sl-future__heading heading2">How does Seamless contribute to the future of finance?</h2></Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <Card
              image={liquidity}
              title='Blockchain-agnostic, open, and permissionless.'
              body='By working with any blockchain, Seamless securely provides liquidity to the entire DeFi ecosystem.'
              type='left'
            />
          </Col>
          <Col xs={12} lg={6}>
            <Card
              image={security}
              title='Security and execution performance at scale.'
              body='With breakthrough cryptography and multi-party computation, Seamless allows you to control your assets at all times.'
              type='right'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Future;
