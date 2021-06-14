import './Header.css';
import scroll from '../../../images/icons/scroll-dark.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div className="sl-header__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <h1 className="sl-header__heading1 heading1">Seamless</h1>
            <div className="sl-header__button-wrapper">
              <button className="sl-header__button button-lg d-none d-md-block">Launching 2022</button>
              <button className="sl-header__button button-sm d-md-none">Launching 2022</button>
            </div>
            <img src={scroll} alt="Scroll to bottom" className="d-none d-lg-block" />
          </Col>
          <Col xs={12} lg={6}>
            <h1 className="sl-header__heading2 heading1">An ecosystem of protocols that removes the need for intermediaries.</h1>
            <img src={scroll} alt="Scroll to bottom" className="d-lg-none" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
