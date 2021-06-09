import './NavBarMobile.css'
// import logoWhite from '../../../../images/logos/wellfield-white.svg';
import logoBlack from '../../../../images/logos/wellfield-black.svg';
import close from '../../../../images/icons/nav-close.svg';
import hamburger from '../../../../images/icons/nav-hamburger.svg';
import downGrey from '../../../../images/icons/chevron-down-grey.png';
import downOrange from '../../../../images/icons/chevron-down-orange.png';
import placeholder from '../../../../images/icons/Placeholder.svg';

import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';


function NavBarMobile() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);


  const handleLogoClick = () => {
    setIsOpen(false);
    history.push('/')
  }

  return (
    <Navbar expand="md" collapseOnSelect onToggle={() => setIsOpen(!isOpen)} expanded={isOpen} className={isOpen ? 'navbar--open' : ''}>
      <Navbar.Brand onClick={() => handleLogoClick()} style={{ marginLeft: 30 }}>
        <img src={logoBlack} alt="Wellfield logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <img src={isOpen ? close : hamburger} alt={isOpen ? "Close icon" : "Hamburger menu icon"} />
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => setShow(!show)} style={{ marginTop: 100 }} >
            <h2 className="heading5">Our Brands<img src={show ? downOrange : downGrey} alt="Chevron down" style={{ marginLeft: 8 }} /></h2>
          </Nav.Link>

          {show &&
            <>
              <Nav.Link eventKey="1" onClick={() => history.push('/seamless')}>
                <div className="d-flex">
                  <img src={placeholder} alt="Seamless logo" style={{ marginRight: 15 }} />
                  <div>
                    <span className="navBar__dropdown-title">Seamless</span>
                    <span className="navBar__dropdown-description">Permissionless, unstoppable cross-blockchain trading</span>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link eventKey="2" onClick={() => history.push('/moneyclip')} style={{ marginTop: 20 }} >
                <div className="d-flex" >
                  <img src={placeholder} alt="Moneyclip logo" style={{ marginRight: 15 }} />
                  <div>
                    <span className="navBar__dropdown-title">MoneyClip</span>
                    <span className="navBar__dropdown-description">Simplified access to the world of DeFi</span>
                  </div>
                </div>
              </Nav.Link>
            </>
          }

          <Nav.Link eventKey="3" onClick={() => history.push('/about')}>
            <h2 className="heading5">About Us</h2>
          </Nav.Link>

          <Nav.Link eventKey="4">
            <button onClick={() => history.push('/contact')} className="button-lg navBar__button">Contact Us</button>
          </Nav.Link>


        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
}

export default NavBarMobile;
