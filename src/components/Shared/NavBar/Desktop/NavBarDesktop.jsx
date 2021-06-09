import './NavBarDesktop.css';
// import logoWhite from '../../../../images/logos/wellfield-white.svg';
import logoBlack from '../../../../images/logos/wellfield-black.svg';
import downGrey from '../../../../images/icons/chevron-down-grey.png';
import downOrange from '../../../../images/icons/chevron-down-orange.png';
import placeholder from '../../../../images/icons/Placeholder.svg';

import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBarDesktop() {
  const buttonRef = useRef();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(!show);
  }
  const hideDropdown = () => {
    setShow(false);
  }
  const onNav = (path) => {
    history.push(path)
    setShow(false)
  }
  const handleContactClick = () => {
    history.push('/contact')
    buttonRef.current.blur();
  }

  return (
    <Navbar expand="md" collapseOnSelect>
      <Container style={{ position: 'relative' }}>

        <Navbar.Brand
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/')}><img src={logoBlack} alt="Wellfield logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <div onClick={() => onNav('/seamless')} className="navBar__link">
                Our Brands<img src={show ? downOrange : downGrey} alt="Chevron down" style={{ marginLeft: 8 }} />
              </div>

              {show &&
                <div className="navBar__dropdown" style={{ cursor: 'pointer' }}>
                  <div onClick={() => onNav('/seamless')} className="d-flex">
                    <img src={placeholder} alt="Seamless logo" style={{ marginRight: 15 }} />
                    <div>
                      <span className="navBar__dropdown-title">Seamless</span>
                      <span className="navBar__dropdown-description">Permissionless, unstoppable cross-blockchain trading</span>
                    </div>
                  </div>
                  <div onClick={() => onNav('/moneyclip')} className="d-flex" style={{ marginTop: 20 }}>
                    <img src={placeholder} alt="Moneyclip logo" style={{ marginRight: 15 }} />
                    <div>
                      <span className="navBar__dropdown-title">MoneyClip</span>
                      <span className="navBar__dropdown-description">Simplified access to the world of DeFi</span>
                    </div>
                  </div>
                </div>
              }
            </div>

            <div className="navBar__link" onClick={() => history.push('/about')}>About Us</div>

            <button onClick={() => handleContactClick()} ref={buttonRef} className="button-sm navBar__button">Contact Us</button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar >
  );
}

export default NavBarDesktop;
