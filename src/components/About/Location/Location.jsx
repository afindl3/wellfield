import './Location.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Location() {
  return (
    <div className="location__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <h2 className="heading2 mb-0">Location</h2>
            <p className="p1 mb-0 location__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et. Sit nulla cursus fringilla erat at facilisis.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Location;