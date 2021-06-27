import './Footer.css';
import logo from '../../../images/logos/wellfield-white.svg';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  const history = useHistory();

  return (
    <div className="footer__bg">
      <Container>
        <Row>
          <Col xs={12} lg={3} >
            <img src={logo} onClick={() => history.push('/')} className="footer__logo" alt="Wellfield logo" />
          </Col>

          <Col xs={6} md={3} lg={3} >
            <Link to="/seamless" className="link footer__item">Seamless</Link>
            <Link to="/moneyclip" className="link footer__item">MoneyClip</Link>
            <Link to="/about" className="link footer__item">About</Link>
          </Col>

          <Col xs={6} md={3} lg={3} >
            <Link to="/privacy" className="link footer__item footer__item--secondary">Privacy Policy</Link>
            <Link to="/disclaimer" className="link footer__item footer__item--secondary">Disclaimer</Link>
          </Col>

          <Col xs={12} md={6} lg={3} >
            <a href="mailto:info@wellfield.com" className="link footer__item--secondary footer__email">info@wellfield.com</a>
            <span className="footer__item--secondary">© Wellfield Technologies 2021.<br></br>All rights reserved.</span>
          </Col>
        </Row>

      </Container >
    </div >
  );
}

export default Footer;
