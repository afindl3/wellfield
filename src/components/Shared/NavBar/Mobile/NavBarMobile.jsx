import './NavBarMobile.css'
import logoWhite from '../../../../images/logos/wellfield-white.svg';
import logoBlack from '../../../../images/logos/wellfield-black.svg';
import close from '../../../../images/icons/nav-close.svg';
import hamburgerWhite from '../../../../images/icons/nav-hamburger-white.svg';
import hamburgerBlack from '../../../../images/icons/nav-hamburger-black.svg';
import downGrey from '../../../../images/icons/chevron-down-grey.svg';
import downOrange from '../../../../images/icons/chevron-down-orange.svg';

import moneyclip from '../../../../images/logos/moneyclip-1x.png';
import seamless from '../../../../images/logos/seamless-1x.png';

import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';


function NavBarMobile({ bg }) {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false); // mobile nav open
  const [show, setShow] = useState(false); // dropdown open

  const handleLogoClick = () => {
    setIsOpen(false);
    history.push('/')
  }

  useEffect(() => {

  }, []);

  return (
    <div className={`navBar__bg-color--${bg}`}>
      <div className={`navBar__bg--${bg}`}>
        <Navbar expand="md" collapseOnSelect onToggle={() => setIsOpen(!isOpen)} expanded={isOpen} className={isOpen && "navbar--open"}>
          <Navbar.Brand onClick={() => handleLogoClick()} style={{ marginLeft: 30, cursor: 'pointer' }}>
            <img src={isOpen ? logoBlack : (bg === 'black' ? logoWhite : logoBlack)} alt="Wellfield logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <img src={isOpen ? close : (bg === 'black' ? hamburgerBlack : hamburgerWhite)} alt={isOpen ? "Close icon" : "Hamburger menu icon"} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => setShow(!show)} style={{ marginTop: 100 }} >
                <h2 className={`heading5 ${show && "navBar__underline"}`}>Our Brands<img src={show ? downOrange : downGrey} alt="Chevron down" style={{ marginLeft: 8 }} /></h2>
              </Nav.Link>

              {show &&
                <>
                  <Nav.Link eventKey="1" onClick={() => history.push('/seamless')}>
                    <div className="d-flex">
                      <img src={seamless} alt="Seamless logo" className="navBar__child-logo" />
                      <div>
                        <span className="navBar__dropdown-title">Seamless</span>
                        <span className="navBar__dropdown-description">Permissionless, unstoppable cross-blockchain trading</span>
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link eventKey="2" onClick={() => history.push('/moneyclip')} style={{ marginTop: 20 }} >
                    <div className="d-flex" >
                      <img src={moneyclip} alt="Moneyclip logo" className="navBar__child-logo" />
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

              <Nav.Link eventKey="4" href="mailto:info@wellfield.com">
                <button className="button-lg navBar__button">Contact Us</button>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBarMobile;
