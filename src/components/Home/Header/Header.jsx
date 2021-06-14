import './Header.css';
import scroll from '../../../images/icons/scroll-to-bottom.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div className="header__bg">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="header__heading heading1">Wellfield is building technology that unlocks the future of decentralized finance.</h1>
            <img src={scroll} alt="Scroll to bottom" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
