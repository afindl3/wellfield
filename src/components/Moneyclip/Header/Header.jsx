import './Header.css';
import scroll from '../../../images/icons/scroll-light.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div className="mc-header__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <h1 className="mc-header__heading1 heading1">MoneyClip</h1>
            <div className="mc-header__button-wrapper">
              <button className="mc-header__button button-lg d-none d-md-block">Launching Fall 2021</button>
              <button className="mc-header__button button-sm d-md-none">Launching Fall 2021</button>
            </div>
            <img src={scroll} alt="Scroll to bottom" className="d-none d-lg-block" />
          </Col>
          <Col xs={12} lg={6}>
            <h1 className="mc-header__heading2 heading1">Simplified access to the world of DeFi.</h1>
            <img src={scroll} alt="Scroll to bottom" className="d-lg-none" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
