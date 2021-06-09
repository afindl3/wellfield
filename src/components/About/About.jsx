import './About.css';

import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
      <Helmet>
        <title>Wellfield - About us</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - About us" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca/about" />
      </Helmet>

      <Container>
        <Row>
          <Col xs={12}>
            <h2>About us</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;