import './NavBar.css';
import NavBarDesktop from './Desktop/NavBarDesktop';
import NavBarMobile from './Mobile/NavBarMobile';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const type = {
  '/': 'white',
  '/seamless': 'black',
  '/moneyclip': 'white',
  '/disclaimer': 'white',
  '/about': 'white'
};

function NavBar() {
  const [bg, setBg] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    setBg(type[pathname])
  }, [pathname]);

  return (
    <>
      <div className="d-none d-md-block">
        <NavBarDesktop bg={bg} />
      </div>

      <div className="d-md-none">
        <NavBarMobile bg={bg} />
      </div>
    </>
  );
}

export default NavBar;
