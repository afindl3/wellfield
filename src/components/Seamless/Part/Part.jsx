import './Part.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Part() {
  return (
    <div className="sl-part__bg">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="sl-part__card">
              <h2 className="sl-part__heading heading1">Seamless is part of Wellfield.</h2>
              <p className="sl-part__body p1">Wellfield receives transaction fees from trades processed by the Seamless protocol, no matter the app or wallet being used.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Part;
