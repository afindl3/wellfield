import './Privacy.css';

import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Wellfield - Privacy Policy</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - Privacy Policy" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca/privacy" />
      </Helmet>


      <Container>
        <Row>
          <Col xs={12}>
            <h2>Privacy policy</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Privacy;