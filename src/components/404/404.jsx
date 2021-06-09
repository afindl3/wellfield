import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ErrorPage() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <h2>The page you’re looking for doesn’t exist!</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ErrorPage;