import React, {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';
import { Button } from './Button';
import'./Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            0xprey <i class="fa-solid fa-frog"></i>
          
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'na-item'>
              <Link to='/' classname='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className = 'na-item'>
              <Link to='/AboutMe' classname='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
              </li>
              <li className = 'na-item'>
              <Link to='/Test' classname='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
              </li>

          </ul>

        </div>
      </nav>
  
    </>
  
  )
}

export default Navbar