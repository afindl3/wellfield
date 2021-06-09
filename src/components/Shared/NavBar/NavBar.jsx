import './NavBar.css';
import NavBarDesktop from './Desktop/NavBarDesktop';
import NavBarMobile from './Mobile/NavBarMobile';

function NavBar() {
  return (
    <>
      <div className="d-none d-md-block">
        <NavBarDesktop />
      </div>

      <div className="d-md-none">
        <NavBarMobile />
      </div>
    </>
  );
}

export default NavBar;
