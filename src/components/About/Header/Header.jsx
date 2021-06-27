import './Header.css';
import scroll from '../../../images/icons/scroll-light.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div className="about-header__bg">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="about-header__container">
              <span className="about-header__eyebrow heading5">Tagline here</span>
              <h1 className="about-header__heading heading1">About Us.</h1>
              <p className="heading3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt aliquam et non id quisque tempus cras.</p>
              <img src={scroll} alt="Scroll to bottom" className="d-none d-lg-block m-auto" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
