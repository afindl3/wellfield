import './Header.css';
import scroll from '../../../images/icons/scroll-to-bottom.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div className="seamless-header__bg">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <h1 className="seamless-header__heading1 heading1">Seamless</h1>
            <div className="seamless-header__button-wrapper">
              <button className="seamless-header__button button-lg ">Launching 2022</button>
            </div>
            <img src={scroll} alt="Scroll to bottom" />
          </Col>
          <Col xs={12} lg={6}>
            <h1 className="seamless-header__heading2 heading1">An ecosystem of protocols that removes the need for intermediaries.</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
