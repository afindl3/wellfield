import './NavBarDesktop.css';
import logoWhite from '../../../../images/logos/wellfield-white.svg';
import logoBlack from '../../../../images/logos/wellfield-black.svg';
import downGrey from '../../../../images/icons/chevron-down-grey.svg';
import downOrange from '../../../../images/icons/chevron-down-orange.svg';
import moneyclip from '../../../../images/logos/moneyclip.svg';
import seamless from '../../../../images/logos/seamless-v2.svg';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBarDesktop({ bg }) {
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

  return (
    <div className={`navBar--${bg}`}>
      <Navbar expand="md" collapseOnSelect>
        <Container style={{ position: 'relative' }}>

          <Navbar.Brand
            style={{ cursor: 'pointer' }}
            onClick={() => history.push('/')}><img src={bg === 'black' ? logoWhite : logoBlack} alt="Wellfield logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <div onClick={() => onNav('/seamless')} className={`navBar__link navBar__link--${bg} ${show && "navBar__underline"}`}>
                  Our Brands<img src={show ? downOrange : downGrey} alt="Chevron down" style={{ marginLeft: 8 }} />
                </div>

                {show &&
                  <div className="navBar__dropdown" style={{ cursor: 'pointer' }}>
                    <div onClick={() => onNav('/seamless')} className="d-flex">
                      <img src={seamless} alt="Seamless logo" className="navBar__child-logo" />
                      <div>
                        <span className="navBar__dropdown-title">Seamless</span>
                        <span className="navBar__dropdown-description">Permissionless, unstoppable cross-blockchain trading</span>
                      </div>
                    </div>
                    <div onClick={() => onNav('/moneyclip')} className="d-flex" style={{ marginTop: 20 }}>
                      <img src={moneyclip} alt="Moneyclip logo" className="navBar__child-logo" />
                      <div>
                        <span className="navBar__dropdown-title">MoneyClip</span>
                        <span className="navBar__dropdown-description">Simplified access to the world of DeFi</span>
                      </div>
                    </div>
                  </div>
                }
              </div>

              <div className={`navBar__link navBar__link--${bg}`} onClick={() => history.push('/about')}>About Us</div>

              <a href="mailto:info@wellfield.com" className={`link button-sm navBar__button navBar__button--${bg}`}>Contact Us</a>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar >
    </div>
  );
}

export default NavBarDesktop;
