import './Terms.css';

import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Terms() {
  return (
    <>
      <Helmet>
        <title>Wellfield - Terms & Conditions</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - Terms & Conditions" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca/terms" />
      </Helmet>

      <Container>
        <Row>
          <Col xs={12}>
            <h2>Terms and conditions</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Terms;