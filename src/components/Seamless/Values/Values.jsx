import './Values.css';
import accessibility from '../../../images/icons/accessibility.svg';
import control from '../../../images/icons/control.svg';
import decentralization from '../../../images/icons/decentralization.svg';
import options from '../../../images/icons/options.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = (props) => (
  <div className={`values__card values__card--${props.index}`}>
    <img src={props.icon} alt={`${props.title} icon`} />
    <h5 className="values__card-title heading5">{props.title}</h5>
    <p className="p2 mb-0">{props.body}</p>
  </div>
);

function Values() {
  return (
    <div className="values__bg">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="values__heading heading1">Our Values</h1>
            <h3 className="values__paragraph heading3">DeFi is reinventing finance. We want everyone to participate in ways that better their lives.</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={decentralization}
              title='Decentralization'
              body='DeFi is in its early stages. We are accelerating true decentralization.'
              index='1'
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={control}
              title='Control'
              body='You should not need third parties to hold and protect your assets.'
              index='2'
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={accessibility}
              title='Accessibility'
              body='Everyone should enjoy easy access to DeFi’s benefits.'
              index='3'
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={options}
              title='Options'
              body='DeFi is only as powerful as its uses; it should work for the way you live.'
              index='4'
            />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Values;
